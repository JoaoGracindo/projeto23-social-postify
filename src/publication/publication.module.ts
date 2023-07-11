import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PublicationRepository } from './repository/publication.repository';
import { PrismaPublication } from './repository/implementation/prismaPublication.repository';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/repository/user.repository';
import { PrismaUser } from 'src/user/repository/implementation/prismaUser.repository';

@Module({
  controllers: [PublicationController],
  providers: [
    PublicationService,
    {
      provide: PublicationRepository,
      useClass: PrismaPublication
    },
    AuthService,
    UserService,
    JwtService,
    {
      provide: UserRepository,
      useClass: PrismaUser
    }
  ],
  exports: [
    PublicationService,
    {
      provide: PublicationRepository,
      useClass: PrismaPublication
    }
  ]
})
export class PublicationModule {}
