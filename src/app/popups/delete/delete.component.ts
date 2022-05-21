import {Component, Inject, OnInit} from '@angular/core';
import {TeacherService} from "../../teacher/teacher.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";
import {Teacher} from "../../teacher/teacher";
import {TeacherComponent} from "../../teacher/teacher.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  receivedTeacher: any;

  constructor(public teacherService: TeacherService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              // public compTeach: TeacherComponent,
              public router: Router
              ) {
    this.receivedTeacher = data;
  }

  ngOnInit(): void {
  }

  deleteTeacher() {
    console.log(this.receivedTeacher.id)

    this.teacherService.deleteTeacher(this.receivedTeacher.id).subscribe(
      (response: void) => {
        console.log(response);
        // this.compTeach.getTeachers();
        // this.router.navigate(['/teacher']);


      }, (error: HttpErrorResponse) => {
        // this.dialog.closeAll();
        alert(error.message);
      }
    )
  }
}
