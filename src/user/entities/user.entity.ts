import { HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _avatar: string,
    readonly id: string = randomUUID(),
  ) {}

  
}
