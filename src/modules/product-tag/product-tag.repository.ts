import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateProductTag, UpdateProductTag } from './dto';

import { ProductTag } from './product-tag.entity';

@Injectable()
export class ProductTagRepository {
  constructor(
    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}

  async getAll() {
    return this.productTagRepository.createQueryBuilder().getMany();
  }

  async getById(id: string): Promise<ProductTag> {
    return this.productTagRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.productTagRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }

  async create(values: CreateProductTag): Promise<InsertResult> {
    return this.productTagRepository
      .createQueryBuilder()
      .insert()
      .into(ProductTag)
      .values(values as unknown as ProductTag)
      .returning('id')
      .execute();
  }

  async update(values: UpdateProductTag, id: string): Promise<UpdateResult> {
    return this.productTagRepository
      .createQueryBuilder()
      .update(ProductTag)
      .set(values as unknown as ProductTag)
      .where('id = :id', { id })
      .execute();
  }
}
