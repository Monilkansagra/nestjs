import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  
//   // 1. The Data Source (Array)
//   private students = [
//     { id: 1, name: 'John Doe', age: 20 },
//     { id: 2, name: 'Jane Smith', age: 22 },
//   ];

//   // --- GET ALL STUDENTS ---
//   @Get()
//   getAllStudents() {
//     return this.students;
//   }

//   // --- GET ONE STUDENT BY ID ---
//   @Get(':id')
//   getById(@Param('id') id: string) {
//     // Check if student exists
//     const foundStudent = this.students.find((s) => s.id === Number(id));
//     if (!foundStudent) {
//       return { message: 'Student not found' };
//     }
//     return foundStudent;
//   }

//  @Post()
//   insertStudent(@Body() body: any) {
//     // 1. PRINT DATA TO TERMINAL
//     console.log('Received Body:', body); 
//     console.log('Type of body:', typeof body);

//     if (!body || !body.name || !body.age) {
//       return { 
//         status: 400, 
//         error: 'Invalid Data. Please send a JSON body with name and age.' 
//       };
//     }

//     const newStudent = {
//       id: this.students.length + 1,
//       name: body.name,
//       age: body.age,
//     };

//     this.students.push(newStudent);
//     return { message: 'Student created successfully', data: newStudent };
//   } 

//   // --- UPDATE STUDENT (PUT) ---
//   @Put(':id')
//   updateStudent(@Param('id') id: string, @Body() body: any) {
//     const index = this.students.findIndex((s) => s.id === Number(id));

//     if (index !== -1) {
//       this.students[index] = {
//         ...this.students[index], // Keep the old ID
//         ...body,                 // Overwrite name and age
//       };
//       return { message: 'Student updated successfully', data: this.students[index] };
//     }
    
//     return { message: 'Student not found' };
//   }

//   // --- DELETE STUDENT (DELETE) ---
//   @Delete(':id')
// //   deleteStudent(@Param('id') id: string) {
//     const initialLength = this.students.length;
    
//     // Filter out the student with the matching ID
//     this.students = this.students.filter((s) => s.id !== Number(id));

//     if (this.students.length < initialLength) {
//       return { message: 'Student deleted successfully' };
//     }
    
//     return { message: 'Student not found' };

constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.findAll(); // Call the service
  }

  // @Get(':id')
  // getById() {
  //   return this.studentService.findOne();
  // }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.studentService.findOne(Number(id));
  }

  // @Post()
  // insertStudent() {
  //   return this.studentService.insert();
  // }

  @Post()
  insertStudent(@Body() body: any) {
    return this.studentService.insert(body);
  }

  // @Put(':id')
  // updateStudent() {
  //   return this.studentService.update();
  // }

  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() body: any) {
    return this.studentService.update(Number(id), body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.delete(Number(id));
  }
  }
