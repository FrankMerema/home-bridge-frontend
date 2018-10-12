import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AuthenticationService} from '../../api/services/authentication.service';

@Component({
  selector: 'hb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;

  registerForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
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
      .subscribe(user => {
        console.log(user);
      }, response => {
        this.error = response.error;
      });
  }

}

export const checkEqualPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const passwordRepeated = control.get('passwordRepeated');

  if (password.pristine || passwordRepeated.pristine) {
    return null;
  }

  return password && passwordRepeated && password.value !== passwordRepeated.value ? {invalid: true} : null;
};
