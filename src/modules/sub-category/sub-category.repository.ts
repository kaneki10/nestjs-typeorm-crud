import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateSubCategory, UpdateSubCategory } from './dto';

import { SubCategory } from './sub-category.entity';

@Injectable()
export class SubCategoryRepository {
  constructor(
    @InjectRepository(SubCategory)
    private readonly subCategoryRepository: Repository<SubCategory>,
  ) {}

  async getAll() {
    return this.subCategoryRepository.createQueryBuilder().getMany();
  }

  async getById(id: string): Promise<SubCategory> {
    return this.subCategoryRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.subCategoryRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }

  async create(values: CreateSubCategory): Promise<InsertResult> {
    return this.subCategoryRepository
      .createQueryBuilder()
      .insert()
      .into(SubCategory)
      .values(values as unknown as SubCategory)
      .returning('id')
      .execute();
  }

  async update(values: UpdateSubCategory, id: string): Promise<UpdateResult> {
    return this.subCategoryRepository
      .createQueryBuilder()
      .update(SubCategory)
      .set(values as unknown as SubCategory)
      .where('id = :id', { id })
      .execute();
  }
}
