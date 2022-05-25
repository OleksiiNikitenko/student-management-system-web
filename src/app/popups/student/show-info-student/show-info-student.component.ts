import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeacherComponent} from "../../../teacher/teacher.component";

@Component({
  selector: 'app-show-info-student',
  templateUrl: './show-info-student.component.html',
  styleUrls: ['./show-info-student.component.css']
})
export class ShowInfoStudentComponent implements OnInit {

  receivedStudent: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.receivedStudent = data;
  }

  ngOnInit(): void {
  }

}
