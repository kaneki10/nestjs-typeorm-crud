import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { MailService } from '../mail/mail.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly connection: DataSource,
    private readonly mailService: MailService,
  ) {}

  async getAll() {
    const users = await this.userRepository.getAll();
    return users;
  }

  async getById(id: string) {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new HttpException('User not Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async getByEmail(email: string) {
    const user = await this.userRepository.getByEmail(email);
    if (!user) {
      throw new HttpException('User not Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async delete(id: string) {
    const response = await this.userRepository.remove(id);
  }

  async update(value: UpdateUserDto, id: string) {
    const response = await this.userRepository.update(value, id);
    return response;
  }

  async create(value: CreateUserDto) {
    const user = new User();
    user.email = value.email;
    user.firstname = value.firstname;
    user.lastname = value.lastname;
    user.role = value.role;

    await user.hashPassword(value.password);
    await this.connection.transaction(async (manager: EntityManager) => {
      await manager.save(user);
    });
    await this.mailService.register({ ...user, password: value.password });
    const currentUser = await this.getById(user.id);
    return currentUser;
  }
}
