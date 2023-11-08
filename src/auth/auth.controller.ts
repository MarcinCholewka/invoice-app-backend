import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { AuthService } from '@auth/auth.service';
import { LocalStrategy } from '@auth/local.strategy';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalStrategy)
  @Post('login')
  login(@Body() { email, password }: any) {
    return this.authService.login(email, password);
  }
}
