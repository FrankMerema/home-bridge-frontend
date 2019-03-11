import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@shared/api';

@Component({
  selector: 'hb-two-factor-login',
  templateUrl: './two-factor-login.component.html',
  styleUrls: ['./two-factor-login.component.scss']
})
export class TwoFactorLoginComponent implements OnInit {

  keys: string[];

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  verifyAuthToken(): void {
    if (Object.keys(this.keys).length === 6) {
      this.authenticationService.verify2FactorAuthCode([...Object.values(this.keys)].join(''))
        .subscribe(result => {
          if (result.verified) {

          } else {
            this.keys = {};
          }
        });
    }
  }

  focusNext(event: any): void {
    const element = event.srcElement;

    if (element.value.length > 0 && element.nextElementSibling) {
      element.nextElementSibling.focus();
    }
  }
}
