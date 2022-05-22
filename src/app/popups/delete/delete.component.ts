import {Component, Inject, OnInit} from '@angular/core';
import {TeacherService} from "../../teacher/teacher.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  receivedTeacher: any;

  constructor(public teacherService: TeacherService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {
    this.receivedTeacher = data;
  }

  ngOnInit(): void {
  }

  deleteTeacher() {
    console.log(this.receivedTeacher.id)

    this.teacherService.deleteTeacher(this.receivedTeacher.id).subscribe(
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
