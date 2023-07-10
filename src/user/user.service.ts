import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaUser } from './repository/implementation/prismaUser.repository';
@Injectable()
export class UserService {
  constructor(private readonly repository: PrismaUser) {}

  create(user: CreateUserDto) {
    return this.repository.addUser(user);
  }

  findByEmail(email: string) {
    return this.repository.findUserByEmail(email);
  }

  findById(id: number) {
    return this.repository.findUserById(id);
  }
}
