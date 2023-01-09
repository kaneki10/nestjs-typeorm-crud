import { IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageDto } from '../../../infra/shared/dto';

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
  readonly title: LanguageDto;
}

export default UpdateSubCategory;
