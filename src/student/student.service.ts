import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from '../entities/entities/Students'

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Students)
    private studentRepo: Repository<Students>,
  ) {}

  // Get all students from your MySQL table
  findAll() {
    return this.studentRepo.find();
  }

  // Find a specific student by ID
  findOne(id: number) {
    return this.studentRepo.findOneBy({ studentId: id });
  }

  // Add a new student
  create(data: any) {
    return this.studentRepo.save(data);
  }

  // Update a student
  async update(id: number, data: any) {
    await this.studentRepo.update(id, data);
    return this.findOne(id);
  }

  // Delete a student
  delete(id: number) {
    return this.studentRepo.delete(id);
  }
}