import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from '@auth/auth.service';
import { LocalStrategy } from '@auth/local.strategy';
import { SignInDto } from '@auth/dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalStrategy)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() signInDto: SignInDto) {
    return this.authService.login(signInDto);
  }
}
