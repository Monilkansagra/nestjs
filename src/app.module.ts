import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Students } from './entities/entities/Students';
import { FacultyModule } from './faculty/faculty.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'm@Nil##5099',
      database: 'student_db',
      entities: [Students],
      synchronize: false,
    }),
    StudentModule,
    FacultyModule,
    AuthModule, 
  ],
})
export class AppModule {}