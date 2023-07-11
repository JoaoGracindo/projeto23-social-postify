import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './repository/user.repository';
import { PrismaUser } from './repository/implementation/prismaUser.repository';
import { UsersController } from './user.controller';

@Module({
  controllers: [UsersController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUser,
    },
  ],
  exports: [
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUser,
    },
  ],
})
export class UserModule {}
