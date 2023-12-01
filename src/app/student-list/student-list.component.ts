import { Student } from './../models/student.model';
import { Component } from '@angular/core';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students: Student[] = [];
  selectedStudent?: Student;

  public DeleteItem(id: number) {
    this.students = this.students.filter(s => s.id != s.id);
  }

  public ShowItem(student: Student = new Student()) {
    this.selectedStudent = student;
  }

  public AddNewStudent() {

  }

  public saveStudentToList(studentToSave: Student) {
    if (studentToSave.id == 0) {
      studentToSave.id = this.students.length + 1;
      this.students.push(studentToSave);
    }
    else{
      let index = this.students.findIndex(s=> s.id == studentToSave.id);
      this.students[index] = studentToSave;
    } 
    this.selectedStudent = undefined;
  }
}
