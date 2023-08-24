import { Component } from '@angular/core';
import { Publisher } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: [
  ]
})
export class NewHeroPageComponent {
  public publishers = [
    {id:'DC Comics', desc:'DC - Comics'},
    {id:'Marvel Comics', desc:'Marvel - Comics'},
  ];
}
