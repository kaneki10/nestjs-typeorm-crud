import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateBrand, UpdateBrand } from './dto';

import { Brand } from './brand.entity';

@Injectable()
export class BrandRepository {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async getAll() {
    return this.brandRepository.createQueryBuilder().getMany();
  }

  async getById(id: string): Promise<Brand> {
    return this.brandRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.brandRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }

  async create(values: CreateBrand): Promise<InsertResult> {
    return this.brandRepository
      .createQueryBuilder()
      .insert()
      .into(Brand)
      .values(values as unknown as Brand)
      .returning('id')
      .execute();
  }

  async update(values: UpdateBrand, id: string): Promise<UpdateResult> {
    return this.brandRepository
      .createQueryBuilder()
      .update(Brand)
      .set(values as unknown as Brand)
      .where('id = :id', { id })
      .execute();
  }
}
