import { AuthService } from '../../modules/authentication/services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private routerService: Router
  ) {}
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this.routerService.navigate(['/login']);
      return false;
    }
  }
}
