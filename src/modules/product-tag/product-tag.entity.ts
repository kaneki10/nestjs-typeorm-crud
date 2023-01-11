import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
} from 'typeorm';
import { LanguageDto } from '../../infra/shared/dto';
import { Product } from '../product/product.entity';

@Entity({ name: 'product_tag' })
export class ProductTag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('simple-json')
  title: LanguageDto;

  @ManyToMany(() => Product, (product) => product.productTags, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  products: Product[];
}
