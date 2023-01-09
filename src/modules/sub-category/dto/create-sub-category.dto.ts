import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageDto } from '../../../infra/shared/dto';

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
  readonly title: LanguageDto;

  @ApiProperty({
    description: 'Category ID',
    example: '2dc69470-c45d-4cee-bc68-132ed342fb3b',
  })
  @IsNotEmpty()
  @IsString()
  category: string;
}

export default CreateSubCategory;
