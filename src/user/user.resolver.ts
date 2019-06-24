import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { UserInput } from './user.input';
// import { ValidationPipe } from '../pipes/validation.pipe';
import {
  UsePipes,
} from '@nestjs/common';

@Resolver('Users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query(() => String)
  async hello() {
    return 'world';
  }

  @Query(() => [User])
  async users() {
    return this.usersService.findAll();
  }

  /* tslint:disable */
  @Query(() => User)
  async user(@Args('_id') _id: string) {
    return this.usersService.findById(_id);
  }

  @Mutation(() => User)
  // @UsePipes(new ValidationPipe())
  async createUser(@Args('input') input: UserInput) {
    return await this.usersService.create(input);
  }

  @Mutation(() => Boolean)
  async updateUser(@Args('_id') _id: string, @Args('input') input: UserInput) {
    return await this.usersService.update(_id, input);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('_id') _id: string) {
    return await this.usersService.delete(_id);
  }

  @Mutation(() => Boolean)
  async deleteAll() {
    return await this.usersService.deleteAll();
  }
}
