import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { LanguageDto } from '../../infra/shared/dto';
import { FileEntity } from '../file/file.entity';
import { SubCategory } from '../sub-category/sub-category.entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('simple-json')
  title: LanguageDto;

  @OneToMany(() => SubCategory, (subCategory) => subCategory)
  subCategories: SubCategory[];

  @OneToOne(() => FileEntity, (file) => file.category, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  avatar: FileEntity;
}
