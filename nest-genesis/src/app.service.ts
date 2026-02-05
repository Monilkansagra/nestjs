import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Nest Genesis!';
  }

  getAbout() : string{
    return 'This is the About Us page created by me!';
  }

  getContect():string{
    return 'this is my contect page !';
  }
}
