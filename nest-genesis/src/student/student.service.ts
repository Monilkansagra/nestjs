// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class StudentService 
// {
//     findAll() {
//     return 'Hello World: This is findAll()';
//   }

//   findOne() {
//     return 'Hello World: This is findOne()';
//   }

//   insert() {
//     return 'Hello World: This is insert()';
//   }

//   update() {
//     return 'Hello World: This is update()';
//   }

//   delete() {
//     return 'Hello World: This is delete()';
//   }
// }
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  
  // 1. The Data (Private Array)
  private students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
  ];

  // --- FIND ALL ---
  findAll() {
    return this.students;
  }

  // --- FIND ONE ---
  findOne(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      // Throwing an error here makes NestJS handle the 404 automatically
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  // --- INSERT ---
  insert(data: any) {
    const newStudent = {
      id: this.students.length + 1, // Simple ID generation
      name: data.name,
      age: data.age,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  // --- UPDATE ---
  update(id: number, data: any) {
    const index = this.students.findIndex((s) => s.id === id);
    
    if (index === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    // Merge old data with new data
    this.students[index] = {
      ...this.students[index],
      ...data
    };
    
    return this.students[index];
  }

  // --- DELETE ---
  delete(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    
    if (index === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    // Remove 1 item at the specific index
    this.students.splice(index, 1);
    
    return { message: 'Student deleted successfully' };
  }
}