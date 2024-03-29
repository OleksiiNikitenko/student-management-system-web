import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeacherService} from "./teacher/teacher.service";
import {HttpClientModule} from "@angular/common/http";
import {TeacherComponent} from './teacher/teacher.component';
import {RouterModule} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';
import {StudentsComponent} from './students/students.component';
import {AccountInfoComponent} from './account-info/account-info.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AddTeacherComponent} from './popups/teacher/add-teacher/add-teacher.component';
import {ShowInfoComponent} from './popups/teacher/show-info/show-info.component';
import {EmailComponent} from './popups/teacher/email/email.component';
import {EditComponent} from './popups/teacher/edit/edit.component';
import {DeleteComponent} from './popups/teacher/delete/delete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AddStudentComponent} from './popups/student/add-student/add-student.component';
import {EditStudentComponent} from './popups/student/edit-student/edit-student.component';
import {ShowInfoStudentComponent} from './popups/student/show-info-student/show-info-student.component';
import { DeleteStudentComponent } from './popups/student/delete-student/delete-student.component';
import { FilterPipe } from './pipes/filter.pipe';
import {SortPipe} from "./pipes/sort.pipe";
import { StudentChartsComponent} from './student-charts/student-charts.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';

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
    DeleteComponent,
    AddStudentComponent,
    EditStudentComponent,
    ShowInfoStudentComponent,
    DeleteStudentComponent,
    FilterPipe,
    SortPipe,
    StudentChartsComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    TermsComponent
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
    ReactiveFormsModule,
    MatPaginatorModule,
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
      {
        path: 'studentsStatistics',
        component: StudentChartsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'privacyPolicy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'terms',
        component: TermsComponent
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
  entryComponents: [
    ShowInfoComponent,
    EmailComponent,
    DeleteComponent,
    EditComponent,
    AddTeacherComponent,
    AddStudentComponent,
    ShowInfoStudentComponent,
    EditStudentComponent
  ]
})
export class AppModule {
}
