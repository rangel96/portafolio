import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  exports: [
    InicioComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
  ]
})
export class ComponentsModule { }
