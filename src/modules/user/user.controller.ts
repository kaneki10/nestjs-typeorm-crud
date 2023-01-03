import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  HttpException,
  Delete,
  Param,
  Get,
  Req,
  Put,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';

import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('/me')
  @ApiOperation({ summary: 'Method: returns current user' })
  @ApiOkResponse({
    description: 'The user was returned successfully',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.OK)
  async getMe(@Req() request) {
    return this.usersService.getById(request.user.id);
  }

  @Get('/')
  @ApiOperation({ summary: 'Method: returns all users' })
  @ApiOkResponse({
    description: 'The users were returned successfully',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.OK)
  async getData() {
    try {
      return await this.usersService.getAll();
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new user' })
  @ApiCreatedResponse({
    description: 'The user was created successfully',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() userData: CreateUserDto): Promise<User> {
    try {
      return await this.usersService.create(userData);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id/')
  @ApiOperation({ summary: 'Method: updating user' })
  @ApiOkResponse({
    description: 'User was changed',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() userData: UpdateUserDto,
    @Param('id') id: string,
  ): Promise<UpdateResult | User> {
    try {
      return await this.usersService.update(userData, id);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting user' })
  @ApiOkResponse({
    description: 'User was deleted',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    try {
      return await this.usersService.delete(id);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
