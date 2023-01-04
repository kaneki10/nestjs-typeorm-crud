import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductTagService } from './product-tag.service';
import { ProductTagController } from './product-tag.controller';
import { ProductTag } from './product-tag.entity';
import { ProductTagRepository } from './product-tag.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTag])],
  controllers: [ProductTagController],
  providers: [ProductTagService, ProductTagRepository],
})
export class ProductTagModule {}
