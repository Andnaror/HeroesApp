import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: [
  ]
})
export class NewHeroPageComponent {

  public heroForm = new FormGroup({
    id               : new FormControl(''),
    superhero        : new FormControl('', {nonNullable:true}),
    publisher        : new FormControl<Publisher>(Publisher.DCComics),
    alter_ego        : new FormControl(''),
    first_appearance : new FormControl(''),
    characters       : new FormControl(''),
    alt_img          : new FormControl(''),

  });

  public publishers = [
    {id:'DC Comics', desc:'DC - Comics'},
    {id:'Marvel Comics', desc:'Marvel - Comics'},
  ];
  constructor(private heroesService: HeroesService){

  }
  get currentHero():Hero{
    const hero= this.heroForm.value as Hero;
    return hero;
  }
  OnSubmit():void{
    if(this.heroForm.invalid)return;
    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero)
        .subscribe(hero=>{
          //TODO: mostrar snackbar
        })
        return;
    }

    this.heroesService.addHero(this.currentHero)
      .subscribe(hero=>{
        //TODO: mostrar snackbar y navigar a /heroes/edit/edit/hero.id
      })

  }

}
