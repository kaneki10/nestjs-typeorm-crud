import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateSubCategory {
  @ApiProperty({
    description: 'Title',
    example: {
      uz: 'sport',
      ru: 'спорт',
      en: 'sport',
    },
  })
  @IsNotEmpty()
  @IsObject()
  readonly title: {
    uz: string;
    ru: string;
    en: string;
  };

  @ApiProperty({
    description: 'Category ID',
    example: '2dc69470-c45d-4cee-bc68-132ed342fb3b',
  })
  @IsNotEmpty()
  @IsString()
  category: string;
}

export default CreateSubCategory;
