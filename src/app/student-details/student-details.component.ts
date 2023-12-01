import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student, Years } from './../models/student.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COUESES } from '../models/course.model';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  private _student?: Student;
  
  public get student(): Student {
    return this._student as Student;
  }
  @Input()
  public set student(value: Student | undefined) {
    this._student = value;
    if(this._student)
    this.studentForm = new FormGroup({
      "id": new FormControl(this.student?.id, Validators.required),
      "name": new FormControl(this.student?.name, [Validators.minLength(2),Validators.required ]),
      "phone": new FormControl(this.student?.phone, [Validators.required, Validators.minLength(10)]),
      "courseId": new FormControl(this.student?.courseId, Validators.required),
      "year": new FormControl(this.student?.year, Validators.required),
      "active": new FormControl(this.student?.active, Validators.required),
      "avgMark": new FormControl(this.student?.avgMark)
    });
  }

  @Output()
  OnSaveStudent: EventEmitter<Student> = new EventEmitter();

  coursesList = COUESES;

  yearsTypes = Years;

  studentForm!: FormGroup;
  saveNewStudent() {
    this.student = this.studentForm.value;
    this.OnSaveStudent.emit(this.student);
  }

}
