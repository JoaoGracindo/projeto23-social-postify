import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaUser } from 'src/user/repository/implementation/prismaUser.repository';
import { SignInDto } from './dto/auth-signin.dto';
import { SignUpDto } from './dto/auth-signup.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private readonly repository: PrismaUser,
        private readonly service: UserService,
        private readonly jwtService: JwtService,
        ) {}

    async signup(body: SignUpDto) {
        const user = await this.service.create(body);
        return this.createToken(user);
    }

    createToken(user: User) {
        const token = this.jwtService.sign(
            {
                id: user.id,
                email: user.email,
            }
        );

        return { token }
    }

}
