import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { LanguageDto } from '../../infra/shared/dto';
import { Brand } from '../brand/brand.entity';
import { Category } from '../category/category.entity';
import { SubCategory } from '../sub-category/sub-category.entity';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('simple-json')
  title: LanguageDto;

  @Column()
  price: string;

  @Column('simple-json')
  about: LanguageDto;

  @Column({ nullable: true })
  rate: number;

  @ManyToOne(() => Brand, (brand) => brand)
  @JoinColumn()
  brand: Brand;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.category, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  subCategory: SubCategory;

  @ManyToOne(() => Category, (category) => category.products, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  category: Category;
}
