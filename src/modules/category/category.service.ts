import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCategory, UpdateCategory } from './dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async getAll() {
    const categories = await this.categoryRepository.getAll();
    return categories;
  }

  async getById(id: string) {
    const category = await this.categoryRepository.getById(id);
    if (!category) {
      throw new HttpException('Category not Found', HttpStatus.NOT_FOUND);
    }
    return category;
  }

  async delete(id: string) {
    const response = await this.categoryRepository.remove(id);
    return response;
  }

  async update(value: UpdateCategory, id: string) {
    const response = await this.categoryRepository.update(value, id);
    return response;
  }

  async create(value: CreateCategory) {
    const response = await this.categoryRepository.create(value);
    return response;
  }
}
