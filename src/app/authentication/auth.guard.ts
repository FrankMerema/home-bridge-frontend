import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';
import {AuthenticationService} from '../api/services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private userService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getCurrentUser()
      .pipe(
        map(() => true),
        catchError(() => {
          this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
          return of(false);
        }));
  }
}
