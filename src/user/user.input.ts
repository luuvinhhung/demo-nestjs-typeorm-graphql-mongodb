import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class UserInput {
  @IsNotEmpty()
  @Length(10, 20, { message: 'email must be at least 10 characters' })
  @IsEmail({}, { message: 'Invalid email.'})
  email: string;

  @IsNotEmpty()
  password: string;
}
