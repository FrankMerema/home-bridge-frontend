import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../api/services/authentication.service';

@Component({
  selector: 'hb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.returnUrl = queryParams.get('returnUrl');
    });
  }

  onLoginSubmit(username: string, password: string): void {
    this.authenticationService.authenticate(username, password)
      .subscribe(user => {
        this.router.navigate([this.returnUrl]);
      });
  }
}
