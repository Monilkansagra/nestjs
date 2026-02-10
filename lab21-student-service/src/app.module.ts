import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';


@Module({
  imports: [StudentModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
