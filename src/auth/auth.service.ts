import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Auth } from './entities/auth.entity';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  private users: Auth[] = []; // Your static array "database"

  constructor(private jwtService: JwtService) {}

  async register(dto: CreateAuthDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser = { id: Date.now(), email: dto.email, password: hashedPassword };
    this.users.push(newUser);
    return { message: 'User registered successfully' };
  }

  async login(dto: CreateAuthDto) {
    const user = this.users.find(u => u.email === dto.email);
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}