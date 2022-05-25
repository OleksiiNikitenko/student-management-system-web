import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../students/student.service";
import {MatDialog} from "@angular/material/dialog";
import {Student} from "../../../students/student.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentForm: FormGroup | any;

  constructor(public studentService: StudentService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.addStudentForm = new FormGroup(
      {
        'name': new FormControl(null, [Validators.required]),
        'faculty': new FormControl(null, [Validators.required]),
        'studyYear': new FormControl(null, [Validators.required]),
        'grade': new FormControl(null, [Validators.required]),
        'groupName': new FormControl(null, [Validators.required]),
        'appRole': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$')]),
        'reserveEmail': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$')]),
        'phone': new FormControl(null, [Validators.required]),
        'imgUrl': new FormControl(null, [Validators.required]),
      });
  }

  addStudent() {
    this.studentService.addStudent(this.addStudentForm.value).subscribe(
      (response: Student) => {
        console.log(response);

        this.addStudentForm.reset();
        this.dialog.closeAll();

      }, (error: HttpErrorResponse) => {
        alert(error.message);
        this.dialog.closeAll();
      }
    )
  }

}
