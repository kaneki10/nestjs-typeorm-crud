import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';

import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll() {
    return this.userRepository.createQueryBuilder().getMany();
  }

  async getById(id: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();
  }

  async getByEmail(email: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne();
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }

  async create(values: CreateUserDto): Promise<InsertResult> {
    return this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(values as unknown as User)
      .returning('id')
      .execute();
  }

  async update(values: UpdateUserDto, id: string): Promise<UpdateResult> {
    return this.userRepository
      .createQueryBuilder()
      .update(User)
      .set(values as unknown as User)
      .where('id = :id', { id })
      .execute();
  }
}
