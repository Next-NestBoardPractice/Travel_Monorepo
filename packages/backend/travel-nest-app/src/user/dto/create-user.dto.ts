import { PickType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty({
    message: '이메일을 입력해주세요.',
  })
  readonly email: string;
  @Type(() => String)
  @IsString()
  readonly nickname: string;
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      '비밀번호는 한개의 영문, 한개의 숫자, 한개의 특수문자를 포함한 8자 이상이 되어야 합니다.',
  })
  password: string;
  @Type(() => String)
  readonly phone: string;
  @IsString()
  readonly address: string;
}
export class AuthUserDto extends PickType(CreateUserDto, [
  'email',
  'password',
  'nickname',
  'address',
  'phone',
]) {}

export class UpdateUserDto extends PickType(CreateUserDto, [
  'nickname',
  'password',
  'phone',
  'address',
]) {
  @IsNumber()
  readonly id: number;
}
