import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ResumeComponent } from "./component/resume/resume.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SectionComponent } from "./component/section/section.component";

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { CoverLetterComponent } from './component/cover-letter/cover-letter.component';

@NgModule({
  declarations: [AppComponent, ResumeComponent, SectionComponent, CoverLetterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
