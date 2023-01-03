import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRole } from '../../infra/shared/types';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  password: string;

  @Column({ length: 50 })
  firstname: string;

  @Column({ length: 50 })
  lastname: string;

  @Column({ unique: true, length: 125 })
  email: string;

  @Column({ unique: true, length: 125 })
  username: string;

  @Column()
  role: UserRole;

  public async hashPassword(password: string): Promise<void> {
    this.password = await bcrypt.hash(password, 10);
  }

  public isPasswordValid(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
