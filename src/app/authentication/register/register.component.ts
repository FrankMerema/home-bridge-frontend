import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@shared/api';
import { checkEqualPasswordValidator } from '@shared/validators';

@Component({
  selector: 'hb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;

  registerForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordRepeated: new FormControl('', [Validators.required])
    }, {validators: checkEqualPasswordValidator});

    this.registerForm.valueChanges
      .subscribe(_ => {
        this.error = null;
      });
  }

  onRegisterSubmit(): void {
    this.authenticationService.register(this.registerForm.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      }, response => {
        this.error = response.error;
      });
  }

}
