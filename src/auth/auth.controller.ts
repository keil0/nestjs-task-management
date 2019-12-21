import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthCredentialsDto } from './dto/auth-credentials-dto';
import { AuthService } from './auth.service';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {
  }

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCrendentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCrendentialsDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCrendentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCrendentialsDto);
  }
}
