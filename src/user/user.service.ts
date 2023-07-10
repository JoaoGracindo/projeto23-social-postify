import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaUser } from './repository/implementation/prismaUser.repository';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private readonly repository: PrismaUser) {}

  async create(user: CreateUserDto) {
    const userExists = this.repository.findUserByEmail(user.email);
    if(userExists) throw new HttpException('User already exists', HttpStatus.CONFLICT);

    const hash = bcrypt.hashSync(user.password, 10);
    return await this.repository.addUser({
      ...user,
      password: hash
    });
  }

  async findByEmail(email: string) {
    return await this.repository.findUserByEmail(email);
  }

  async findById(id: number) {
    const user = await this.repository.findUserById(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }
}
