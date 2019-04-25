import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ManagementComponent } from '../management/management.component';
import { EmployeeComponent } from '../employee/employee.component';
import { StudentComponent } from '../student/student.component';
import { HeaderComponent } from '../home-page/header/header.component';
import { ContentComponent } from '../home-page/content/content.component';
import { FooterComponent } from '../home-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ManagementComponent,
    EmployeeComponent,
    StudentComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
