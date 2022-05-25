import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {StudentService} from "../../../students/student.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  receivedStudent: any;

  constructor(public studentService: StudentService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {
    this.receivedStudent = data;

  }

  ngOnInit(): void {
  }

  deleteStudent() {
    console.log(this.receivedStudent.id)

    this.studentService.deleteStudent(this.receivedStudent.id).subscribe(
      (response: void) => {
        console.log(response);
        this.dialog.closeAll();

      }, (error: HttpErrorResponse) => {
        alert(error.message);
        this.dialog.closeAll();
      }
    )
  }

}
