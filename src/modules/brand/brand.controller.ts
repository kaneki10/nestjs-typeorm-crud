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

import { CreateBrand, UpdateBrand } from './dto';
import { BrandService } from './brand.service';

@ApiTags('Brand')
@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get('/id')
  @ApiOperation({ summary: 'Method: returns brand by id' })
  @ApiOkResponse({
    description: 'The brand was returned successfully',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: string) {
    return this.brandService.getById(id);
  }

  @Get('/')
  @ApiOperation({ summary: 'Method: returns all brands' })
  @ApiOkResponse({
    description: 'The brands were returned successfully',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.OK)
  async getData() {
    try {
      return await this.brandService.getAll();
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new brand' })
  @ApiCreatedResponse({
    description: 'The brand was created successfully',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() categoryData: CreateBrand) {
    try {
      return await this.brandService.create(categoryData);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Method: updating brand' })
  @ApiOkResponse({
    description: 'Brand was changed',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() userData: UpdateBrand,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    try {
      return await this.brandService.update(userData, id);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting brand' })
  @ApiOkResponse({
    description: 'Brand was deleted',
  })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    try {
      return await this.brandService.delete(id);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
