import { IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class UpdateSubCategory {
  @ApiProperty({
    description: 'Title',
    example: {
      uz: 'futbol',
      ru: 'футбол',
      en: 'football',
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

export default UpdateSubCategory;
