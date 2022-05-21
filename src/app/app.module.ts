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
import { AddTeacherComponent } from './popups/add-teacher/add-teacher.component';
import { ShowInfoComponent } from './popups/show-info/show-info.component';
import { EmailComponent } from './popups/email/email.component';
import { EditComponent } from './popups/edit/edit.component';
import { DeleteComponent } from './popups/delete/delete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    HomePageComponent,
    StudentsComponent,
    AccountInfoComponent,
    NavBarComponent,
    AddTeacherComponent,
    ShowInfoComponent,
    EmailComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    // MatSortModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatAutocompleteModule,
    // MatExpansionModule,
    // MatCheckboxModule,
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


    ]),
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent],
  entryComponents: [ShowInfoComponent, EmailComponent, DeleteComponent]
})
export class AppModule { }
