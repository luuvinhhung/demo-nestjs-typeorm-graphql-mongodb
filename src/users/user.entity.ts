/* tslint:disable */
import {
  Entity,
  Column, ObjectIdColumn,
  CreateDateColumn, UpdateDateColumn, VersionColumn,
  BeforeInsert, BeforeUpdate, BeforeRemove
} from 'typeorm';
import * as uuid from 'uuid';
import * as bcrypt from 'bcrypt';
import { IsEmail, Validate, Length } from 'class-validator';

// export abstract class IMutation {
//   abstract createUser(input: UserInput): User | Promise<User>;
// }

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  status: boolean;

  // special columns auto set
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: String;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: String;

  @BeforeInsert()
  async b4register() {
    this._id = await uuid.v4();
    this.status = await true;
    this.password = await bcrypt.hash(this.password, 10);
  }

  @BeforeUpdate()
  async b4update() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  // @BeforeRemove()
  // async b4block() {
  //   this.status = false;
  // }
}