import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './register.dto';
import { LoginDto } from './login.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Successful login' })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @ApiOperation({ summary: 'Register' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ status: 201, description: 'User registered' })
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const { username, password } = registerDto;
    return this.authService.register(username, password);
  }
}
