import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
