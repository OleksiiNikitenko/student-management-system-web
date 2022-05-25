import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  receivedUser: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) {
    this.receivedUser = data;
  }

  ngOnInit(): void {
  }

}
