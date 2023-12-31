import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/auth-signin.dto';
import { SignUpDto } from './dto/auth-signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

   @Post('signin')
   async signin(@Body() body: SignInDto) {
    return this.authService.signin(body);
   }

   @Post('signup')
   async signup(@Body() body: SignUpDto) {
    return this.authService.signup(body);
   }
}
