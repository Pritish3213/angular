import { FormGroup } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export const passwordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    return password.value && confirmPassword.value && password.value !== confirmPassword.value ? { 'passwordsMismatch': true } : null;
};