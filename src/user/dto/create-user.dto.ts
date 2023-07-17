import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsStrongPassword,
    IsUrl,
    MaxLength
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({
      minLength: 6,
    })
    @MaxLength(20)
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar: string
  }
  