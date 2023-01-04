import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBrand, UpdateBrand } from './dto';
import { BrandRepository } from './brand.repository';

@Injectable()
export class BrandService {
  constructor(private readonly brandRepository: BrandRepository) {}

  async getAll() {
    const categories = await this.brandRepository.getAll();
    return categories;
  }

  async getById(id: string) {
    const category = await this.brandRepository.getById(id);
    if (!category) {
      throw new HttpException('Category not Found', HttpStatus.NOT_FOUND);
    }
    return category;
  }

  async delete(id: string) {
    const response = await this.brandRepository.remove(id);
    return response;
  }

  async update(value: UpdateBrand, id: string) {
    const response = await this.brandRepository.update(value, id);
    return response;
  }

  async create(value: CreateBrand) {
    const response = await this.brandRepository.create(value);
    return response;
  }
}
