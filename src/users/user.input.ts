import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class UserInput {
  @IsNotEmpty()
  @Length(10, 20)
  // @IsEmail()
  username: string;

  @IsNotEmpty()
  password: string;
}
