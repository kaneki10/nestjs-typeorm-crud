import { IsNotEmpty, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageDto } from '../../../infra/shared/dto';
import { parseTextToObject } from '../../../infra/helpers';
import { Transform } from 'class-transformer';

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
  @Transform(({ value }: { value: string }) =>
    parseTextToObject('title', value),
  )
  readonly title: LanguageDto;
}

export default CreateCategory;
