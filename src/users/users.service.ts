import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from './user.input';
import * as uuid from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /* tslint:disable */
  async findById(_id: string): Promise<User> {
    return await this.userRepository.findOne({ _id });
  }

  async create(input: UserInput): Promise<User> {
    const user = new User();
    // user._id = uuid.v4();
    user.email = input.email;
    user.password = input.password;
    return await this.userRepository.save(user);
  }
  async update(_id: string, input: UserInput): Promise<boolean> {
    const user = new User();
    user._id = _id;
    user.email = input.email;
    user.password = input.password;
    return (await this.userRepository.save(user)) ? true : false;
  }

  async delete(_id: string): Promise<boolean> {
    const user = new User();
    user._id = _id;
    return (await this.userRepository.remove(user)) ? true : false;
  }

  async deleteAll(): Promise<boolean> {
    return (await this.userRepository.deleteMany({})) ? true : false;
  }
}
