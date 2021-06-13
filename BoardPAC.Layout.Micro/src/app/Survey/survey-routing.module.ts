import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyWrapperComponent } from './survey-wrapper/survey-wrapper.component';

const routes: Routes = [
  { path: 'survey', component: SurveyWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
