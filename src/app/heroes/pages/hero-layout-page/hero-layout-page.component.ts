import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';

@Component({
  selector: 'hero-layout-page',
  templateUrl: './hero-layout-page.component.html',
  styles: [
  ]
})
export class HeroLayoutPageComponent {


  public sidebarItems=[
    {label:'Listado', icon:'label', url:'./list'},
    {label:'Añadir', icon:'add', url:'./new-hero'},
    {label:'Buscar', icon:'search', url:'./search'}
  ]

  constructor(
    private authService: AuthService,
    private router:Router){}


    get user(): User|undefined{
      return this.authService.currentUser
    }
  onLogout(){
    this.authService.logout()
    this.router.navigate(['/auth'])
  }
}
