import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { LanguageDto } from '../../infra/shared/dto';
import { Brand } from '../brand/brand.entity';
import { FileEntity } from '../file/file.entity';
import { ProductTag } from '../product-tag/product-tag.entity';
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
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  subCategory: SubCategory;

  @ManyToMany(() => ProductTag, (productTag) => productTag.products, {
    onDelete: 'CASCADE',
  })
  productTags: ProductTag[];

  @OneToOne(() => FileEntity, (file) => file.product, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  avatar: FileEntity;

  @OneToMany(() => FileEntity, (file) => file.productView)
  views: FileEntity[];
}
