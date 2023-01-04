import { IsNotEmpty, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateProductTag {
  @ApiProperty({
    description: 'Title',
    example: {
      uz: 'new',
      ru: 'новый',
      en: 'yangi',
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

export default CreateProductTag;
