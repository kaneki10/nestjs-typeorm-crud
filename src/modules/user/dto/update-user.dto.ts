import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../../infra/shared/types';

class UpdateUserDto {
  @ApiProperty({
    description: 'email',
    example: 'testemail@gmail.com',
  })
  @IsOptional()
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: 'Firstname',
    example: 'John',
  })
  @IsOptional()
  @IsString()
  readonly firstname: string;

  @ApiProperty({
    description: 'Lastname',
    example: 'Doe',
  })
  @IsOptional()
  @IsString()
  readonly lastname: string;

  @ApiProperty({
    description: 'Password',
    example: 'adsa23fa3ewd!',
  })
  @IsOptional()
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: 'Role',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  readonly role: UserRole;
}

export default UpdateUserDto;
