import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {

  receivedTeacher: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) {
    this.receivedTeacher = data;
  }

  ngOnInit(): void {
  }

}
