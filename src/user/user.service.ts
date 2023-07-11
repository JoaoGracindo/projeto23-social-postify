import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './repository/user.repository';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: CreateUserDto) {
    const userExists = await this.userRepository.findUserByEmail(user.email);
    if(userExists) throw new HttpException('User already exists', HttpStatus.CONFLICT);

    const hash = bcrypt.hashSync(user.password, 10);
    return await this.userRepository.addUser({
      ...user,
      password: hash
    });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findUserByEmail(email);
  }

  async findById(id: number) {
    const user = await this.userRepository.findUserById(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }
}
