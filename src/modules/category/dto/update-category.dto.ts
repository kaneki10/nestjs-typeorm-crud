import { IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class UpdateCategory {
  @ApiProperty({
    description: 'Title',
    example: {
      uz: 'sport',
      ru: 'спорт',
      en: 'sport',
    },
  })
  @IsOptional()
  @IsObject()
  readonly title: {
    uz: string;
    ru: string;
    en: string;
  };
}

export default UpdateCategory;
