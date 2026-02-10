import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  private students: Student[] = [];

  create(createStudentDto: CreateStudentDto) {
    const newStudent = {
      id: this.students.length + 1,
      ...createStudentDto,
    } as Student;
    this.students.push(newStudent);
    return newStudent;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException(`Student with ID ${id} not found`);
    return student;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) throw new NotFoundException(`Student with ID ${id} not found`);
    
    this.students[studentIndex] = { ...this.students[studentIndex], ...updateStudentDto };
    return this.students[studentIndex];
  }

  remove(id: number) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) throw new NotFoundException(`Student with ID ${id} not found`);
    
    const deletedStudent = this.students.splice(studentIndex, 1);
    return { message: `Student #${id} removed successfully`, deletedStudent };
  }
}