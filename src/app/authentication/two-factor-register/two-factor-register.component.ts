import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@shared/api';

@Component({
  selector: 'hb-two-factor-register',
  templateUrl: './two-factor-register.component.html',
  styleUrls: ['./two-factor-register.component.scss']
})
export class TwoFactorRegisterComponent implements OnInit {

  QRLink: string;
  error: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    if (!this.authenticationService.currentUser) {
      this.router.navigate(['/login'], {queryParamsHandling: 'preserve'});
    } else {
      this.authenticationService.get2FAuthQRCode()
        .subscribe(link => {
          this.QRLink = link;
        });
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
