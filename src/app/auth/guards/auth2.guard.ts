import { Injectable } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';

@Injectable({providedIn: 'root'})
export class Auth2Guard  {
  constructor() { }
  // CanMatchFn(route: Route, segments: UrlSegment[]): boolean  | Observable<boolean> {
  //   console.log('can match');

  //   console.log({route,segments});
  //   return true;
  // }
}
