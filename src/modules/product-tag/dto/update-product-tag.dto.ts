import { IsObject, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class UpdateProductTag {
  @ApiProperty({
    description: 'Title',
    example: {
      uz: 'new',
      ru: 'новый',
      en: 'yangi',
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

export default UpdateProductTag;
