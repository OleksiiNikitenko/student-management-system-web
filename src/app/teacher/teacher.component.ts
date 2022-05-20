import {Component, OnInit, Optional} from '@angular/core';
import {Teacher} from "./teacher";
import {TeacherService} from "./teacher.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AddTeacherComponent} from "../popups/add-teacher/add-teacher.component";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [AddTeacherComponent]
})
export class TeacherComponent implements OnInit {

  public teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService,
               public dialogAddTeacher: AddTeacherComponent) {
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  public getTeachers(): void {
    this.teacherService.getTeachers().subscribe(
      (response: Teacher[]) => {
        this.teachers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
