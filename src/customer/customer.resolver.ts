import { Resolver, Args, Query, Mutation, Context } from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-express'
import { Customer } from '@modules/common/entities/entity.index'
import { CustomerService } from './customer.service'

@Resolver('Customer')
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Query('getCustomer')
  async getCustomer(@Args('id') id: string): Promise<Customer | ApolloError> {
    return this.customerService.getCustomer(id)
  }

  @Query('getCustomers')
  async getCustomers(): Promise<Customer[] | ApolloError> {
    return this.customerService.getCustomers()
  }

  @Mutation('createCustomer')
  async createCustomer(
    @Args('info') info,
    @Context() context
  ): Promise<string | ApolloError> {
    return this.customerService.createCustomer(info, context)
  }

  @Mutation('updateCustomer')
  async updateCustomer(
    @Args('id') id: string,
    @Args('info') info: any,
    @Context() context: any
  ): Promise<string | ApolloError> {
    return this.customerService.updateCustomer(id, info, context)
  }

  @Mutation('removeCustomer')
  async removeCustomer(
    @Args('id') id: string,
    @Context() context: any
  ): Promise<string | ApolloError> {
    return this.customerService.removeCustomer(id, context)
  }

  @Mutation('removeCustomers')
  async removeAllCustomer(
    @Args('id') id: string[],
    @Context() context: any
  ): Promise<string | ApolloError> {
    return this.customerService.removeCustomers(id, context)
  }
}
