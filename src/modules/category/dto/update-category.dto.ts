import { IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageDto } from '../../../infra/shared/dto';
import { Transform } from 'class-transformer';
import { parseTextToObject } from '../../../infra/helpers';

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
  @Transform(({ value }: { value: string }) =>
    parseTextToObject('title', value),
  )
  readonly title: LanguageDto;
}

export default UpdateCategory;
