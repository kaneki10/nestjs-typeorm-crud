import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { LanguageDto } from '../../infra/shared/dto';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';

@Entity({ name: 'sub_category' })
export class SubCategory extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('simple-json')
  title: LanguageDto;

  @ManyToOne(() => Category, (category) => category.subCategories, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  category: Category;

  @OneToMany(() => Product, (product) => product.subCategory)
  products: Product[];
}
