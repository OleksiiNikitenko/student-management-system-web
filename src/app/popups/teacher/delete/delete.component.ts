import {Component, Inject, OnInit} from '@angular/core';
import {TeacherService} from "../../../teacher/teacher.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  receivedUser: any;

  constructor(public teacherService: TeacherService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {
    this.receivedUser = data;
  }

  ngOnInit(): void {
  }

  deleteUser() {
    console.log(this.receivedUser.id)

    this.teacherService.deleteTeacher(this.receivedUser.id).subscribe(
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
