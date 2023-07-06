import { IsDateString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(5, 255)
  firstName: string;
  @Length(5, 255)
  middleName: string;
  @Length(5, 255)
  lastName: string;
  @IsDateString()
  birthday: string;
  @Length(15, 255)
  address: string;

  @IsEmail()
  email: string;
}
