import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsStrongPassword,
    IsUrl
  } from 'class-validator';
  
  export class CreateUserDTO {
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
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar: string
  }
  