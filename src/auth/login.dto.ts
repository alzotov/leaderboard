import { IsString, MinLength } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Username of the user' })
  @IsString()
  @MinLength(4)
  username: string;

  @ApiProperty({ description: 'Password of the user' })
  @IsString()
  @MinLength(6)
  password: string;
}
