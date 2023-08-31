import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route,UrlSegment, RouterStateSnapshot, UrlTree, CanMatchFn, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth-service.service';

@Injectable({providedIn: 'root'})
export class PublicGuard implements  CanMatch, CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router) { }


  private checkAuthStatus():boolean| Observable<boolean>{
    return this.authService.checkAuth()
    .pipe(
      tap(isAuth=>console.log(isAuth)
      ),
      tap(isAuth=>{
        if(isAuth)
          this.router.navigate(['/heroes'])
      }),

    )
  }
  canMatch(route: Route, segments: UrlSegment[]): boolean  | Observable<boolean> {
    return this.checkAuthStatus();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

}
