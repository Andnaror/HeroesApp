import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'heroes-search-hero-page',
  templateUrl: './search-hero-page.component.html',
  styles: [
  ]
})
export class SearchHeroPageComponent {
  public searchInput = new FormControl('');
  public heroes:Hero[]=[];
  public selectedHero?:Hero;

  constructor(private heroesService:HeroesService){

  }

  searchHero(){
    const value: string=this.searchInput.value || '';
    console.log(value)
    this.heroesService.getSuggestions(value)
       .subscribe(heroes=>this.heroes=heroes)
  }
  onSelectedOption(event:MatAutocompleteSelectedEvent):void{
    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }
    const hero:Hero= event.option.value;
    this.searchInput.setValue(hero.superhero)
    this.selectedHero = hero
  }
}
