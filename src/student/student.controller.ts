import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students') // This makes the URL: http://localhost:3000/students
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // 1. Get all students from your MySQL table
  @Get()
  getAll() {
    return this.studentService.findAll();
  }

  // 2. Get one student by ID
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  // 3. Add a new student record
  @Post()
  create(@Body() body: any) {
    return this.studentService.create(body);
  }

  // 4. Update a student's info
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.studentService.update(+id, body);
  }

  // 5. Delete a student
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.delete(+id);
  }
}