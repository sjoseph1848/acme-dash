import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { FormsComponent } from './core/components/forms/forms.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './core/components/navigation/header/header.component';
import { SidenavListComponent } from './core/components/navigation/sidenav-list/sidenav-list.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectComponent } from './dashboard/project/project.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { ProjectListComponent } from './dashboard/project/project-list/project-list.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { QuestionListComponent } from './dashboard/question-list/question-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormsComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavListComponent,
    ProjectComponent,
    ProjectListComponent,
    QuestionComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
