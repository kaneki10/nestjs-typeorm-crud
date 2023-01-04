import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateBrand {
  @ApiProperty({
    description: 'Title',
    example: 'Nike',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;
}

export default CreateBrand;
