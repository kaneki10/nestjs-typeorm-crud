import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateSubCategory, UpdateSubCategory } from './dto';
import { SubCategoryRepository } from './sub-category.repository';

@Injectable()
export class SubCategoryService {
  constructor(private readonly subCategoryRepository: SubCategoryRepository) {}

  async getAll() {
    const categories = await this.subCategoryRepository.getAll();
    return categories;
  }

  async getById(id: string) {
    const category = await this.subCategoryRepository.getById(id);
    if (!category) {
      throw new HttpException('Sub-category not Found', HttpStatus.NOT_FOUND);
    }
    return category;
  }

  async delete(id: string) {
    const response = await this.subCategoryRepository.remove(id);
    return response;
  }

  async update(value: UpdateSubCategory, id: string) {
    const response = await this.subCategoryRepository.update(value, id);
    return response;
  }

  async create(value: CreateSubCategory) {
    const response = await this.subCategoryRepository.create(value);
    return response;
  }
}
