import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@shared/api';

@Component({
  selector: 'hb-two-factor-login',
  templateUrl: './two-factor-login.component.html',
  styleUrls: ['./two-factor-login.component.scss']
})
export class TwoFactorLoginComponent implements OnInit {

  error: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    if (!this.authenticationService.currentUser) {
      this.router.navigate(['/login'], {queryParamsHandling: 'preserve'});
    }
  }

  verifyAuthToken(code: string): void {
    this.authenticationService.verify2FactorAuthCode(code)
      .subscribe(_ => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        this.router.navigate([returnUrl]);
      }, response => {
        this.error = response.error;
      });
  }
}
