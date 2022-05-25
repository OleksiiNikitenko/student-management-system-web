import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TeacherComponent} from "../../../teacher/teacher.component";
import {TeacherService} from "../../../teacher/teacher.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Teacher} from "../../../teacher/teacher";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  receivedTeacher: any;
  editTeacherForm: FormGroup | any;

  constructor(public teacherService: TeacherService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {
    this.receivedTeacher = data;
  }

  ngOnInit(): void {
    this.editTeacherForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$')]),
      'jobTitle': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'imgUrl': new FormControl(null, [Validators.required]),
    });
  }

  updateTeacher() {
     const resultUser = {
       id: this.receivedTeacher.id,
       name: this.editTeacherForm.value.name,
       email: this.editTeacherForm.value.email,
       jobTitle: this.editTeacherForm.value.jobTitle,
       phone: this.editTeacherForm.value.phone,
       imgUrl: this.editTeacherForm.value.imgUrl,
       teacherCode: this.receivedTeacher.teacherCode
     }

    this.teacherService.updateTeacher(resultUser).subscribe(
      (response: Teacher) => {
        console.log(response);
        this.dialog.closeAll();
      }, (error: HttpErrorResponse) => {
        alert(error.message);
        this.dialog.closeAll();
      }
    )
  }

}
