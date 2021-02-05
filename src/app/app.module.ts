import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './component/resume/resume.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionComponent } from './component/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
