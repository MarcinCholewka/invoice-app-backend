import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from '@auth/auth.service';
import { LocalStrategy } from '@auth/local.strategy';
import { SignInDto } from '@auth/dto/sign-in.dto';
import { AuthEntity } from '@auth/entity/auth.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 404,
    description: 'Not Found (No user found for email: ...)',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized (Invalid password)',
  })
  @ApiOkResponse({ type: AuthEntity })
  @UseGuards(LocalStrategy)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() signInDto: SignInDto) {
    return this.authService.login(signInDto);
  }
}
