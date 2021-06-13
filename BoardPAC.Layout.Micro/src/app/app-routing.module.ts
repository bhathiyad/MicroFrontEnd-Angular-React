import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'apponeroute',
     loadChildren: () => import('appOne/moduleappone').then(m => m.PageoneModule)
  },
  {
    path: 'apptworoute',
     loadChildren: () => import('appTwo/movieModule').then(m => m.MovieListModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
