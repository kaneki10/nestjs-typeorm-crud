import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './dto';

import { Product } from './product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getAll() {
    return this.productRepository.createQueryBuilder().getMany();
  }

  async getById(id: string): Promise<Product> {
    return this.productRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.productRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }

  async create(values: CreateProductDto): Promise<InsertResult> {
    return this.productRepository
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(values as unknown as Product)
      .returning('id')
      .execute();
  }

  async update(values: UpdateProductDto, id: string): Promise<UpdateResult> {
    return this.productRepository
      .createQueryBuilder()
      .update(Product)
      .set(values as unknown as Product)
      .where('id = :id', { id })
      .execute();
  }
}
