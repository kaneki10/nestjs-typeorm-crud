import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

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
}
