import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeacherComponent} from "../../../teacher/teacher.component";

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {

  receivedTeacher: any;

  constructor(public dialogRef: MatDialogRef<TeacherComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.receivedTeacher = data;
  }

  ngOnInit(): void {
  }

}
