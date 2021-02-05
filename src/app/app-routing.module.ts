import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResumeComponent } from "./component/resume/resume.component";

const routes: Routes = [
  { path: "", component: ResumeComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
