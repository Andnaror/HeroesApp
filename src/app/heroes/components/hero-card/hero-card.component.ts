import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit{
  ngOnInit(): void {
    if(!this.hero) throw new Error('Hero property is required');
  }
  @Input()
  public hero!:Hero;
}
