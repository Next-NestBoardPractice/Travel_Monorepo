import { CreateUserDto } from './create-user.dto';
import { PickType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';

export class UpdateUserDto extends PickType(CreateUserDto, [
  'nickname',
  'password',
  'phone',
  'address',
]) {
  @IsNumber()
  readonly id: number;
}
