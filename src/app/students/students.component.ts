import {Component, OnInit} from '@angular/core';
import {Student} from "./student.model";
import {StudentService} from "./student.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";
import {AddStudentComponent} from "../popups/student/add-student/add-student.component";
import {ShowInfoStudentComponent} from "../popups/student/show-info-student/show-info-student.component";
import {EditStudentComponent} from "../popups/student/edit-student/edit-student.component";
import {EmailComponent} from "../popups/teacher/email/email.component";
import {DeleteStudentComponent} from "../popups/student/delete-student/delete-student.component";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];
  public selectedStudent: any;
  public isFoundStudent: boolean = false;

  public faculty = '';
  public searchFaculty = '';

  public sortByParam = '';
  public sortDirection = 'asc';

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
      console.log(` data: ${result}`);
      this.getStudents();
    })
  }

  openShowInfoDialog() {
    this.dialog.open(ShowInfoStudentComponent, {
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

  openEditDialog() {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      data: {
        id: this.selectedStudent.id,
        name: this.selectedStudent.name,
        faculty: this.selectedStudent.faculty,
        studyYear: this.selectedStudent.studyYear,
        grade: this.selectedStudent.grade,
        groupName: this.selectedStudent.groupName,
        appRole: this.selectedStudent.appRole,
        email: this.selectedStudent.email,
        reserveEmail: this.selectedStudent.reserveEmail,
        phone: this.selectedStudent.phone,
        imgUrl: this.selectedStudent.imgUrl,
        studentCode: this.selectedStudent.studentCode
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(` data: ${result}`);
      this.getStudents();
    })
  }

  openEmailDialog() {
    const dialogRef = this.dialog.open(EmailComponent, {
      width: '500px',
      data: {
        name: this.selectedStudent.name,
        email: this.selectedStudent.email,
        reserveEmail: this.selectedStudent.reserveEmail,
        phone: this.selectedStudent.phone
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(` data: ${result}`)
    })
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '500px',
      data: {
        name: this.selectedStudent.name,
        id: this.selectedStudent.id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(` data: ${result}`);
      this.getStudents();
    })
  }

  onFacultyFilter() {
    this.searchFaculty = this.faculty;
  }

  onFacultyFilterClear() {
    this.faculty = '';
    this.searchFaculty = '';
  }

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }

  onSortClear() {
    this.sortByParam = '';
    this.sortDirection = 'asc';
    this.getStudents();
  }
}
