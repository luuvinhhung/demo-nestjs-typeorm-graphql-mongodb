import { Injectable } from '@nestjs/common'
import { ApolloError } from 'apollo-server-express'
import { Customer } from '@modules/common/entities/entity.index'
import { CommonService } from '@modules/common'
import * as uuid from 'uuid'
import * as moment from 'moment'

@Injectable()
export class CustomerService {
  constructor(private readonly commonService: CommonService) {}

  async getCustomer(id: string): Promise<Customer | ApolloError> {
    try {
      return await this.commonService.findAdapter(Customer, { _id: id })
    } catch (error) {
      return new ApolloError(error, '500')
    }
  }

  async getCustomers(): Promise<Customer[] | ApolloError> {
    try {
      return await this.commonService.findAdapter(Customer, { isActive: true })
    } catch (error) {
      return new ApolloError(error, '500')
    }
  }

  async createCustomer(info, context): Promise<string | ApolloError> {
    try {
      if (
        await this.commonService.findOneAdapter(Customer, {
          code: info.code
        })
      ) {
        return new ApolloError('Customer already exist', '409')
      }
      // console.log(context)

      const initCustomer = {
        ...info,
        _id: uuid.v1(),
        isActive: true,
        isCustomer: true
        // createdBy: {
        //   _id: context.userId,
        //   username: context.username,
        //   fullName: context.fullName
        // }
      }

      const data = await this.commonService.createAdapter(
        Customer,
        initCustomer
      )
      return data._id
    } catch (error) {
      return new ApolloError(error, '500')
    }
  }

  async updateCustomer(
    id: string,
    info,
    context
  ): Promise<string | ApolloError> {
    try {
      const data = await this.commonService.updateOneByIdAdapter(Customer, id, {
        $set: {
          ...info,
          updatedAt: moment().valueOf(),
          // updatedBy: { ...context.user }
        }
      })
      if (data._id) return 'success'
      return new ApolloError('Customer does not exit', '400')
    } catch (err) {
      return new ApolloError(err, '500')
    }
  }

  async removeCustomers(id: string[], context): Promise<string | ApolloError> {
    try {
      const result = await this.commonService.removeAdapter(Customer, id)
      if (result) return 'deleted permanently'
    } catch (error) {
      return new ApolloError(error, '500')
    }
  }

  async removeCustomer(id: string, context): Promise<string | ApolloError> {
    
    try {
      const data = await this.commonService.updateOneByIdAdapter(Customer, id, {
        $set: {
          isActive: false,
          updatedAt: moment().valueOf(),
          // updatedBy: { ...context.user }
          // updatedBy: {
          //   _id: context.userId,
          //   username: context.username,
          //   fullName: context.fullName
          // }
        }
      })
      if (data._id) return 'success'
      return new ApolloError('Customer does not exit', '400')
    } catch (err) {
      return new ApolloError(err, '500')
    }
  }
}
