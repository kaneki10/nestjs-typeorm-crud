import { BadRequestException } from '@nestjs/common';
import { isObject } from 'class-validator';

function parseTextToObject(name: string, value?: string) {
  const obj = value ? JSON.parse(value) : '';
  if (!isObject(obj)) {
    throw new BadRequestException(`${name} should be an object.`);
  }
  return obj;
}

export default parseTextToObject;
