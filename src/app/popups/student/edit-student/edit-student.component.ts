import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {StudentsComponent} from "../../../students/students.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../students/student.service";
import {Student} from "../../../students/student.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  receivedStudent: any;
  editStudentForm: FormGroup | any;


  constructor(public studentService: StudentService,
              public dialogRef: MatDialogRef<StudentsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {
    this.receivedStudent = data;
  }

  ngOnInit(): void {
    this.editStudentForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'faculty': new FormControl(null, [Validators.required]),
      'studyYear': new FormControl(null, [Validators.required]),
      'grade': new FormControl(null, [Validators.required]),
      'groupName': new FormControl(null, [Validators.required]),
      'appRole': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$')]),
      'reserveEmail': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$')]),
      'phone': new FormControl(null, [Validators.required]),
      'imgUrl': new FormControl(null, [Validators.required])
    });
  }

  updateStudent() {
    const resultUser = {

      id: this.receivedStudent.id,
      name: this.editStudentForm.value.name,
      faculty: this.editStudentForm.value.faculty,
      studyYear: this.editStudentForm.value.studyYear,
      grade: this.editStudentForm.value.grade,
      groupName: this.editStudentForm.value.groupName,
      appRole: this.editStudentForm.value.appRole,
      email: this.editStudentForm.value.email,
      reserveEmail: this.editStudentForm.value.reserveEmail,
      phone: this.editStudentForm.value.phone,
      imgUrl: this.editStudentForm.value.imgUrl,
      studentCode: this.receivedStudent.studentCode
    }

    this.studentService.updateStudent(resultUser).subscribe(
      (response: Student) => {
        console.log(response);
        this.dialog.closeAll();
      }, (error: HttpErrorResponse) => {
        alert(error.message);
        this.dialog.closeAll();
      }
    )
  }



}
