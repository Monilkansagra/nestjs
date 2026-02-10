import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  // 1. Initialize the static array for Courses
  private courses: Course[] = [];

  // 2. Create a new Course
create(createCourseDto: CreateCourseDto) {
  const newCourse: Course = {
    id: this.courses.length + 1,
    ...createCourseDto, // <--- This "spreads" the fields from the DTO into this object
  };

  this.courses.push(newCourse);
  return newCourse;
}

  
  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((c) => c.id === id);
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    const index = this.courses.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    this.courses[index] = { ...this.courses[index], ...updateCourseDto };
    return this.courses[index];
  }

  remove(id: number) {
    const index = this.courses.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    
    const deletedCourse = this.courses.splice(index, 1);
    return {
      message: `Course #${id} deleted successfully`,
      data: deletedCourse[0],
    };
  }
}