import { Controller, Get, Header, Options, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get('/hello')
  getHello(): string {
    return 'Hello';
  }

  @Get('/set-cookie')
  @Header('Set-Cookie', 'cors-poc-dummy=dummy; HttpOnly; Secure')
  setCookie(): string {
    return 'OK';
  }

  @Get('/credential')
  @Header('Access-Control-Allow-Origin', 'http://localhost:5173')
  @Header('Access-Control-Allow-Credentials', 'true')
  credential(@Req() request: Request): string {
    return request.headers.cookie;
  }

  @Options('/credential')
  @Header('Access-Control-Allow-Origin', 'http://localhost:5173')
  @Header('Access-Control-Allow-Credentials', 'true')
  @Header('Access-Control-Allow-Headers', 'x-hogehoge')
  credentialOptions(@Req() request: Request): void {
    console.log('credentialOptions', request.headers.cookie);
  }
}
