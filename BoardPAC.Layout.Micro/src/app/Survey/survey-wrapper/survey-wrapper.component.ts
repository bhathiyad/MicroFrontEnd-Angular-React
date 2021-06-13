// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-survey-wrapper',
//   templateUrl: './survey-wrapper.component.html',
//   styleUrls: ['./survey-wrapper.component.css']
// })
// export class SurveyWrapperComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'app-survey-wrapper',
  templateUrl: './survey-wrapper.component.html',
  styleUrls: ['./survey-wrapper.component.css']
})
export class SurveyWrapperComponent implements AfterContentInit {
    registry = {
        survey: () => import('survey/web-components')
    };
  @ViewChild('vc', {read: ElementRef, static: true})
  vc!: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {

    const importFn = this.registry["survey"];
    importFn()
      .then(_ => console.debug(`element loaded!`))
      .catch(err => console.error(`error loading :`, err));

    const element = document.createElement("survey-element");
    this.vc.nativeElement.appendChild(element);

  }

}
