import {
  Req,
  Controller,
  Post,
  UseGuards,
  Body,
  Res,
  HttpCode,
} from '@nestjs/common';
import { Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { Public } from './decorators/public.decorator';
import { User } from '../user/user.entity';
import { LocalAuthGuard } from './passport-stratagies/local/local-auth.guard';
import { ACCESS_TOKEN_USER } from './passport-stratagies/access-token-user/access-token-user.strategy';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @HttpCode(200)
  @ApiOkResponse({
    description: 'User logged in',
  })
  @ApiBadRequestResponse({ description: 'Something went wrong from FE' })
  async login(
    @Req() { user }: { user: User },
    @Res({ passthrough: true }) response: Response,
    @Body() _: LoginDto,
  ) {
    const jwt = this.authService.getJWT(user.id);
    response.cookie(ACCESS_TOKEN_USER, jwt, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 31536000000,
    });
  }

  @Public()
  @Post('/logout')
  @HttpCode(200)
  @ApiNoContentResponse({
    description: 'The user was logged out successfully',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie(ACCESS_TOKEN_USER, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
  }
}
