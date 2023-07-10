import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class PrismaUser implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(data: CreateUserDto) {
    return await this.prisma.user.create({ data: data });
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findFirst({ where: email });
  }

  async findUserById(id: number) {
    return await this.prisma.user.findFirst({ where: id });
  }
}
