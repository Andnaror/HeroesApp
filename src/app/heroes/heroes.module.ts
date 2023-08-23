import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { HeroLayoutPageComponent } from './pages/hero-layout-page/hero-layout-page.component';
import { HeroListPageComponent } from './pages/hero-list-page/hero-list-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    HeroLayoutPageComponent,
    HeroListPageComponent,
    NewHeroPageComponent,
    SearchHeroPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
