import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { LanguageDto } from '../../infra/shared/dto';
import { SubCategory } from '../sub-category/sub-category.entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('simple-json')
  title: LanguageDto;

  @OneToMany(() => SubCategory, (subCategory) => subCategory)
  subCategories: SubCategory[];
}
