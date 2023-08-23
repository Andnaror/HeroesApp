import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroLayoutPageComponent } from './pages/hero-layout-page/hero-layout-page.component';
import { HeroListPageComponent } from './pages/hero-list-page/hero-list-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path:'',
    component: HeroLayoutPageComponent,
    children: [
      {
        path:'new-hero',
        component: NewHeroPageComponent
      },
      {
        path:'Search',
        component: SearchHeroPageComponent
      },
      {
        path:'edit/:id',
        component: NewHeroPageComponent
      },
      {
        path:'list',
        component: HeroListPageComponent
      },
      {
        path:':id',
        component: HeroPageComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
