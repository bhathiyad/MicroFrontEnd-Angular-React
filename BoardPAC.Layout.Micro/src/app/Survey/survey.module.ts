import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyWrapperComponent } from './survey-wrapper/survey-wrapper.component';


@NgModule({
  declarations: [SurveyWrapperComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule
  ]
})
export class SurveyModule { }
