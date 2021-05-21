import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projets/projets.component';
import { SkillsComponent } from './skills/skills.component';

import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    ProjetsComponent,
    SkillsComponent
  ],
  exports: [
    InicioComponent,
    AboutComponent,
    ProjetsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
  ]
})
export class ComponentsModule { }
