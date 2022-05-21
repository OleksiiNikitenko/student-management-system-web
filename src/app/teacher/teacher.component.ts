import {Component, OnInit, Optional} from '@angular/core';
import {Teacher} from "./teacher";
import {TeacherService} from "./teacher.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AddTeacherComponent} from "../popups/add-teacher/add-teacher.component";
import {DeleteComponent} from "../popups/delete/delete.component";
import {MatDialog} from "@angular/material/dialog";
import {ShowInfoComponent} from "../popups/show-info/show-info.component";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [AddTeacherComponent, DeleteComponent]
})
export class TeacherComponent implements OnInit {

  public teachers: Teacher[] = [];
  public logResFromPopup: any;
  public selectedTeacher: any;

  constructor(private teacherService: TeacherService,
               public dialogAddTeacher: AddTeacherComponent,
              public dialogDelete: DeleteComponent,
              public dialog: MatDialog) {
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

  onUserClicked(teacher: Teacher) {
    this.selectedTeacher = teacher;
  }

  openShowInfoDialog() {
    const dialogRef = this.dialog.open(ShowInfoComponent, {
      width: '500px',
      data: {
        name: this.selectedTeacher.name,
        email: this.selectedTeacher.email,
        jobTitle: this.selectedTeacher.jobTitle,
        phone: this.selectedTeacher.phone,
        imgUrl: this.selectedTeacher.imgUrl
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.logResFromPopup = result;
      console.log(` data: ${result}`)
    })
  }

}
