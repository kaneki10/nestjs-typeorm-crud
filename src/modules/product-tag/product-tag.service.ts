import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductTag, UpdateProductTag } from './dto';
import { ProductTagRepository } from './product-tag.repository';

@Injectable()
export class ProductTagService {
  constructor(private readonly productTagRepository: ProductTagRepository) {}

  async getAll() {
    const categories = await this.productTagRepository.getAll();
    return categories;
  }

  async getById(id: string) {
    const category = await this.productTagRepository.getById(id);
    if (!category) {
      throw new HttpException('Category not Found', HttpStatus.NOT_FOUND);
    }
    return category;
  }

  async delete(id: string) {
    const response = await this.productTagRepository.remove(id);
    return response;
  }

  async update(value: UpdateProductTag, id: string) {
    const response = await this.productTagRepository.update(value, id);
    return response;
  }

  async create(value: CreateProductTag) {
    const response = await this.productTagRepository.create(value);
    return response;
  }
}
