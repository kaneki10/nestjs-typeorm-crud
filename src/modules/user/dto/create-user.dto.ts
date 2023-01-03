import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../../infra/shared/types';

class CreateUserDto {
  @ApiProperty({
    description: 'email',
    example: 'testemail@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: 'Firstname',
    example: 'John',
  })
  @IsNotEmpty()
  @IsString()
  readonly firstname: string;

  @ApiProperty({
    description: 'Lastname',
    example: 'Doe',
  })
  @IsNotEmpty()
  @IsString()
  readonly lastname: string;

  @ApiProperty({
    description: 'Password',
    example: 'adsa23fa3ewd!',
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: 'Role',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly role: UserRole;
}

export default CreateUserDto;
