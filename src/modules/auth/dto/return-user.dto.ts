import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsEmail,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { UserRole } from '../../../infra/shared/types';
import { User } from '../../user/user.entity';

class ReturnUser {
  @ApiProperty({
    description: `Firstname`,
    example: 'Petr',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  firstname: string;

  @ApiProperty({
    description: `Lastname`,
    example: 'Avlasenko',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  lastname: string;

  @ApiProperty({
    description: `User Email`,
    example: 'phone.petr@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `User id`,
    example: 'sdawdadewsdewd2132seewq',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    description: `User role`,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  role: UserRole;

  constructor(user: User) {
    this.id = user.id;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.role = user.role;
  }
}

export default ReturnUser;
