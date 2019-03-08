import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const checkEqualPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const passwordRepeated = control.get('passwordRepeated');

  if (password.pristine || passwordRepeated.pristine) {
    return null;
  }

  return password && passwordRepeated && password.value !== passwordRepeated.value ? {invalid: true} : null;
};
