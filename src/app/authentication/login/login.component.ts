import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@shared/api';

@Component({
  selector: 'hb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  onLoginSubmit(username: string, password: string): void {
    this.authenticationService.authenticate(username, password)
      .subscribe(result => {
        if (result.hasTwoFactorEnabled) {
          this.router.navigate(['./two-factor-authenticate'], {queryParamsHandling: 'preserve'});
        } else {
          this.router.navigate(['./two-factor-authenticate-create'], {queryParamsHandling: 'preserve'});
        }
      }, response => {
        this.error = response.error;
      });
  }
}
