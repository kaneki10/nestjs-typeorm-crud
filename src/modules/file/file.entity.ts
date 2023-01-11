import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';

@Entity({ name: 'file' })
export class FileEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  key: string;

  @OneToOne(() => Category, (category) => category.avatar)
  category: Category;

  @OneToOne(() => Product, (product) => product.avatar)
  product: Product;

  @ManyToOne(() => Product, (product) => product.views, {
    onDelete: 'CASCADE',
  })
  productView: Product;
}
