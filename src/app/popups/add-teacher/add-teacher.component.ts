import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TeacherService} from "../../teacher/teacher.service";
import {Teacher} from "../../teacher/teacher";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  addTeacherForm: FormGroup | any;

  constructor(public teacherService: TeacherService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.addTeacherForm = new FormGroup(
      {
        'name': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required,
          Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$')]),
        'jobTitle': new FormControl(null, [Validators.required]),
        'phone': new FormControl(null, [Validators.required]),
        'imgUrl': new FormControl(null, [Validators.required]),
      });
  }

  addTeacher() {
    this.teacherService.addTeacher(this.addTeacherForm.value).subscribe(
      (response: Teacher) => {
        console.log(response);

        this.addTeacherForm.reset();
        this.dialog.closeAll();

      }, (error: HttpErrorResponse) => {
        this.dialog.closeAll();

      }
    )
  }

}
