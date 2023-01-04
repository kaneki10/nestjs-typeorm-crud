import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategoryController } from './sub-category.controller';
import { SubCategory } from './sub-category.entity';
import { SubCategoryRepository } from './sub-category.repository';
import { SubCategoryService } from './sub-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategory])],
  controllers: [SubCategoryController],
  providers: [SubCategoryService, SubCategoryRepository],
})
export class SubCategoryModule {}
