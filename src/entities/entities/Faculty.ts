import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("FacultyEmail", ["facultyEmail"], { unique: true })
@Entity("faculty", { schema: "student_db" })
export class Faculty {
  @PrimaryGeneratedColumn({ type: "int", name: "FacultyID" })
  facultyId: number;

  @Column("varchar", { name: "FacultyName", length: 255 })
  facultyName: string;

  @Column("varchar", { name: "FacultyEmail", unique: true, length: 255 })
  facultyEmail: string;

  @Column("varchar", { name: "FacultyDepartment", nullable: true, length: 100 })
  facultyDepartment: string | null;

  @Column("varchar", {
    name: "FacultyDesignation",
    nullable: true,
    length: 100,
  })
  facultyDesignation: string | null;

  @Column("int", { name: "FacultyExperience", nullable: true })
  facultyExperience: number | null;

  @Column("timestamp", {
    name: "CreatedAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
