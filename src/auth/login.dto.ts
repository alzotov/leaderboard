import { IsString, MinLength } from '@nestjs/class-validator';

export class LoginDto {
  @IsString()
  @MinLength(4)
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}
