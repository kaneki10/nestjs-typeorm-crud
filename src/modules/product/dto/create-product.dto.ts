import { IsNotEmpty, IsString, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { LanguageDto } from '../../../infra/shared/dto';
import { parseTextToObject } from '../../../infra/helpers';

class CreateProductDto {
  @ApiProperty({
    description: 'Title',
    example: {
      uz: 'Koptok',
      ru: 'Мяч',
      en: 'Ball',
    },
  })
  @IsNotEmpty()
  @IsObject()
  @Transform(({ value }: { value: string }) =>
    parseTextToObject('title', value),
  )
  readonly title: LanguageDto;

  @ApiProperty({
    description: 'Price',
    example: '120000',
  })
  @IsNotEmpty()
  @IsString()
  readonly price: string;

  @ApiProperty({
    description: 'About',
    example: {
      uz: 'Bu koptok ...',
      ru: 'это мяч ...',
      en: 'this ball ...',
    },
  })
  @IsNotEmpty()
  @IsObject()
  @Transform(({ value }: { value: string }) =>
    parseTextToObject('about', value),
  )
  readonly about: LanguageDto;

  @ApiProperty({
    description: 'Category Id',
    example: '2dc69470-c45d-4cee-bc68-132ed342fb3b',
  })
  @IsNotEmpty()
  @IsString()
  category: string;
}

export default CreateProductDto;
