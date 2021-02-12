import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoverLetterComponent } from "./component/cover-letter/cover-letter.component";
import { ResumeComponent } from "./component/resume/resume.component";

const routes: Routes = [
  { path: "", component: ResumeComponent, pathMatch: "full" },
  { path: "cover-letter", component: CoverLetterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
