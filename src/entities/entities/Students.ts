import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("students", { schema: "student_db" })
export class Students {
  @PrimaryGeneratedColumn({ type: "int", name: "StudentID" })
  studentId: number;

  @Column("varchar", { name: "StudentName", length: 255 })
  studentName: string;

  @Column("int", { name: "StudentAge", nullable: true })
  studentAge: number | null;

  @Column("varchar", { name: "StudentGender", nullable: true, length: 50 })
  studentGender: string | null;

  @Column("varchar", { name: "StudentRollNo", nullable: true, length: 100 })
  studentRollNo: string | null;

  @Column("int", { name: "StudentSemester", nullable: true })
  studentSemester: number | null;
}
