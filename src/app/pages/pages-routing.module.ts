import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { CvOnlineComponent } from './cv-online/cv-online.component';


const routes: Routes = [
  {
    path: 'es',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
  {
    path: 'en',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
  { path: 'cv/online', component: CvOnlineComponent },
];


@NgModule({
  declarations: [],
  exports: [],
  imports: [RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
