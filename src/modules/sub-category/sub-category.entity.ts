import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';

@Entity({ name: 'sub_category' })
export class SubCategory extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('simple-json')
  title: {
    uz: string;
    ru: string;
    en: string;
  };

  @ManyToOne(() => Category, (category) => category.subCategories, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  category: Category;
}
