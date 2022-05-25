import {Component, OnInit} from '@angular/core';
import {Student} from "./student.model";
import {StudentService} from "./student.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";
import {AddStudentComponent} from "../popups/student/add-student/add-student.component";
import {ShowInfoStudentComponent} from "../popups/student/show-info-student/show-info-student.component";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];
  public selectedStudent: any;
  public isFoundStudent: boolean = false;

  constructor(private studentService: StudentService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUserClicked(student: Student) {
    this.selectedStudent = student;
  }

  searchStudents(key: string): void {
    const results: Student[] = [];
    this.isFoundStudent = false;
    for (const student of this.students) {
      if (student.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        student.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        student.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1)
        results.push(student);
    }
    this.students = results;
    if (results.length === 0 || !key) {
      this.getStudents();
      this.isFoundStudent = true;
    }
  }

  openAddStudentDialog() {
    const dialogRef = this.dialog.open(AddStudentComponent);
    dialogRef.afterClosed().subscribe(result => {
      //this.logResFromPopup = result;
      console.log(` data: ${result}`);
      this.getStudents();
    })
  }

  openShowInfoDialog() {
    const dialog = this.dialog.open(ShowInfoStudentComponent, {
      width: '500px',
      data: {
        name: this.selectedStudent.name,
        faculty: this.selectedStudent.faculty,
        studyYear: this.selectedStudent.studyYear,
        grade: this.selectedStudent.grade,
        groupName: this.selectedStudent.groupName,
        appRole: this.selectedStudent.appRole,
        email: this.selectedStudent.email,
        reserveEmail: this.selectedStudent.reserveEmail,
        phone: this.selectedStudent.phone,
        imgUrl: this.selectedStudent.imgUrl
      }
    });

  }


}
