import { Component, OnInit } from '@angular/core';
import {Teacher} from "./teacher";
import {TeacherService} from "./teacher.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {
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
