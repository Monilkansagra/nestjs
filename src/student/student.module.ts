import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Students } from '../entities/entities/Students'; // The entity you pulled

@Module({
  imports: [
    // This line provides the "StudentsRepository" that your service is asking for
    TypeOrmModule.forFeature([Students]) 
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}