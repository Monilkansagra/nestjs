import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { UniversalController } from './universal/universal.controller';
import { StudentService } from './student/student.service';

@Module({
  imports: [],
  controllers: [AppController, StudentController, UniversalController],
  providers: [AppService, StudentService],
})
export class AppModule {}
