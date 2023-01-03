import { IsNotEmpty, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateCategory {
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
}

export default CreateCategory;
