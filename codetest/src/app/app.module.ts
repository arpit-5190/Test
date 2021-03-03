import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EnrolleesComponent } from './enrollees/enrollees.component';
import { ActiveEnrolleesComponent } from './active-enrollees/active-enrollees.component';
import { InActiveEnrolleesComponent } from './in-active-enrollees/in-active-enrollees.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EnrolleeDetailsComponent } from './enrollee-details/enrollee-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EnrolleesComponent,
    ActiveEnrolleesComponent,
    InActiveEnrolleesComponent,
    NotfoundComponent,
    EnrolleeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
