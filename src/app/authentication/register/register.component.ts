import {Component} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AuthenticationService} from '../../api/services/authentication.service';

@Component({
  selector: 'hb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordRepeated: new FormControl('', [Validators.required])
  }, {validators: checkEqualPasswordValidator});

  constructor(private authenticationService: AuthenticationService) {
  }

  onRegisterSubmit(): void {
    this.authenticationService.register(this.registerForm.get('username').value, this.registerForm.get('password').value)
      .subscribe(user => {
        console.log(user);
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
