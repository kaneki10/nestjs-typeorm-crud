import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class UpdateBrand {
  @ApiProperty({
    description: 'Title',
    example: 'Puma',
  })
  @IsOptional()
  @IsString()
  readonly title: string;
}

export default UpdateBrand;
