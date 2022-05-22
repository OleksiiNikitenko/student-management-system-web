import {Component, OnInit} from '@angular/core';
import {Teacher} from "./teacher";
import {TeacherService} from "./teacher.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AddTeacherComponent} from "../popups/add-teacher/add-teacher.component";
import {DeleteComponent} from "../popups/delete/delete.component";
import {MatDialog} from "@angular/material/dialog";
import {ShowInfoComponent} from "../popups/show-info/show-info.component";
import {EmailComponent} from "../popups/email/email.component";
import {EditComponent} from "../popups/edit/edit.component";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [AddTeacherComponent]
})
export class TeacherComponent implements OnInit {

  public teachers: Teacher[] = [];
  public logResFromPopup: any;
  public selectedTeacher: any;

  constructor(private teacherService: TeacherService,
              public dialogAddTeacher: AddTeacherComponent,
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

  openEmailDialog() {
    const dialogRef = this.dialog.open(EmailComponent, {
      width: '500px',
      data: {
        name: this.selectedTeacher.name,
        email: this.selectedTeacher.email,
        phone: this.selectedTeacher.phone
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.logResFromPopup = result;
      console.log(` data: ${result}`)
    })
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '500px',
      data: {
        name: this.selectedTeacher.name,
        id: this.selectedTeacher.id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.logResFromPopup = result;
      console.log(` data: ${result}`);
      this.getTeachers();
    })
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '500px',
      data: {
        id: this.selectedTeacher.id,
        name: this.selectedTeacher.name,
        email: this.selectedTeacher.email,
        jobTitle: this.selectedTeacher.jobTitle,
        phone: this.selectedTeacher.phone,
        imgUrl: this.selectedTeacher.imgUrl,
        teacherCode: this.selectedTeacher.teacherCode
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.logResFromPopup = result;
      console.log(` data: ${result}`);
      this.getTeachers();
    })
  }

  openAddTeacherDialog() {
    const dialogRef = this.dialog.open(AddTeacherComponent
      // ,
      // {
      // width: '500px',
      // data: {
      //   id: this.selectedTeacher.id,
      //   name: this.selectedTeacher.name,
      //   email: this.selectedTeacher.email,
      //   jobTitle: this.selectedTeacher.jobTitle,
      //   phone: this.selectedTeacher.phone,
      //   imgUrl: this.selectedTeacher.imgUrl,
      //   teacherCode: this.selectedTeacher.teacherCode
      // }}
    );
    dialogRef.afterClosed().subscribe(result => {
      this.logResFromPopup = result;
      console.log(` data: ${result}`);
      this.getTeachers();
    })
  }


}
