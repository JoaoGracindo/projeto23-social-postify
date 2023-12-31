import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
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
        private readonly service: UserService,
        private readonly jwtService: JwtService,
        ) {}

    async signup(body: SignUpDto) {
        const user = await this.service.create(body);
        return this.createToken(user);
    }

    async signin(body: SignInDto) {
        const user = await this.service.findByEmail(body.email);
        if(!user) throw new UnauthorizedException('Email or password invalid');

        const validPassword = bcrypt.compareSync(body.password, user.password);
        if(!validPassword) throw new UnauthorizedException('Email or password invalid');

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

    checkToken(token: string) {
        try{
            const info = this.jwtService.verify(
                token,
                {
                    secret: process.env.JWT_SECRET
                }
            );
            return info;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

}
