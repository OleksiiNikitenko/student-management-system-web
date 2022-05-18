import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TeacherService} from "./teacher/teacher.service";
import {HttpClientModule} from "@angular/common/http";
import { TeacherComponent } from './teacher/teacher.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { StudentsComponent } from './students/students.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    HomePageComponent,
    StudentsComponent,
    AccountInfoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'teachers',
        component: TeacherComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'accountInfo',
        component: AccountInfoComponent
      },

      // {path: 'profile/:id', component: TeacherProfile},


    ])
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
