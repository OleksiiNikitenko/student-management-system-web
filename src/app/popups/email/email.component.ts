import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeacherComponent} from "../../teacher/teacher.component";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  receivedTeacher: any;

  constructor(public dialogRef: MatDialogRef<TeacherComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.receivedTeacher = data;
  }

  ngOnInit(): void {
  }

}
