import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Product } from '../product/product.entity';
import { SubCategory } from '../sub-category/sub-category.entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('simple-json')
  title: {
    uz: string;
    ru: string;
    en: string;
  };

  @OneToMany(() => SubCategory, (subCategory) => subCategory)
  subCategories: SubCategory[];

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
