import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAll() {
    const categories = await this.productRepository.getAll();
    return categories;
  }

  async getById(id: string) {
    const product = await this.productRepository.getById(id);
    if (!product) {
      throw new HttpException('Product not Found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async delete(id: string) {
    const response = await this.productRepository.remove(id);
    return response;
  }

  async update(value: UpdateProductDto, id: string) {
    const response = await this.productRepository.update(value, id);
    return response;
  }

  async create(value: CreateProductDto) {
    const response = await this.productRepository.create(value);
    return response;
  }
}
