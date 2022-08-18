import {Component, OnInit} from '@angular/core';
import {Student} from "../students/student.model";
import {HttpErrorResponse} from "@angular/common/http";
import {StudentService} from "../students/student.service";
import {Chart, registerables} from "chart.js";


@Component({
  selector: 'app-student-charts',
  templateUrl: './student-charts.component.html',
  styleUrls: ['./student-charts.component.css']
})
export class StudentChartsComponent implements OnInit {

  studentsArray: Student[] = [];

  constructor(private studentService: StudentService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getStudentsDiagramsData();
  }

  public getStudentsDiagramsData(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.studentsArray = response;

        let bachelors = this.countBachelorsDegree(response)
        const degreeArr = [bachelors, response.length - bachelors]
        this.getDegreeChart(degreeArr)

        const allFaculties = this.countUniqueFaculties(this.studentsArray);
        const studFacultyDiagramData = this.findFacultyDiagramData(allFaculties)
        this.getFacultyChart(studFacultyDiagramData)

        const allGroups = this.countUniqueGroups(this.studentsArray)
        const studGroupsDiagramData = this.findGroupsDiagramData(allGroups)
        this.getGroupsChart(studGroupsDiagramData)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getDegreeChart(degreeArr: any) {
    return new Chart("degreeChart", {
      type: 'polarArea',
      data: {
        labels: ['Bachelor Degree', 'Master degree'],
        datasets: [{
          label: '№ of Students',
          data: degreeArr,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  public getFacultyChart(studFacultyDiagramData: any) {
    return new Chart("facultyChart", {
      type: "pie",
      data: {
        labels: studFacultyDiagramData.nameFacultiesArr,
        datasets: [{
          backgroundColor: this.findColorsArr(studFacultyDiagramData.numFacultiesArr),
          data: studFacultyDiagramData.numFacultiesArr
        }]
      },
    });
  }

  public getGroupsChart(studGroupsDiagramData: any) {
    return new Chart("groupsChart", {
      type: 'pie',
      data: {
        labels: studGroupsDiagramData.namesGroupsArr,
        datasets: [{
          label: "Population (millions)",
          backgroundColor: this.findColorsArr(studGroupsDiagramData.numsGroupsArr),
          data: studGroupsDiagramData.numsGroupsArr
        }]
      },
      options: {}
    });
  }

  public findFacultyDiagramData(allFaculties: any) {
    let numsFacultiesArr = []
    let namesFacultiesArr = []
    for (const [key, value] of Object.entries(allFaculties)) {
      numsFacultiesArr.push(value);
      namesFacultiesArr.push(key)
    }
    return {numFacultiesArr: numsFacultiesArr, nameFacultiesArr: namesFacultiesArr}
  }

  public countBachelorsDegree(studArr: Student[]): number {
    let counter: number = 0
    for (const stud of studArr) {
      if (stud.grade == "Bachelor Degree") {
        counter++
      }
    }
    return counter
  }

  public findColorsArr(dataArr: any) {
    let colorsArr = []
    for (const item of dataArr) {
      colorsArr.push("#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase())
    }
    return colorsArr
  }

  public countUniqueFaculties(studentsArray: any[]) {
    let arrayOfFaculty = []
    for (const item of studentsArray) {
      arrayOfFaculty.push(item.faculty);
    }
    const countUnique = (arrayOfFaculty: any) => {
      const counts: {
        [key: string]: any
      } = {};
      for (var i = 0; i < arrayOfFaculty.length; i++) {
        counts[arrayOfFaculty[i]] = 1 + (counts[arrayOfFaculty[i]] || 0);
      }
      return counts;
    };
    return countUnique(arrayOfFaculty);
  }

  public countUniqueGroups(studentsArray: any[]) {
    let arrayOfGroups = []
    for (const item of studentsArray) {
      arrayOfGroups.push(item.groupName);
    }
    const countUnique = (arrayOfGroups: any) => {
      const counts: {
        [key: string]: any
      } = {};
      for (var i = 0; i < arrayOfGroups.length; i++) {
        counts[arrayOfGroups[i]] = 1 + (counts[arrayOfGroups[i]] || 0);
      }
      return counts;
    };
    return countUnique(arrayOfGroups);
  }

  public findGroupsDiagramData(allGroups: any) {
    let numsGroupsArr = []
    let namesGroupsArr = []
    for (const [key, value] of Object.entries(allGroups)) {
      numsGroupsArr.push(value);
      namesGroupsArr.push(key)
    }
    return {numsGroupsArr, namesGroupsArr}
  }

}

