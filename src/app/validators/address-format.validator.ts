import { AbstractControl, ValidationErrors } from '@angular/forms';

export function addressFormatValidator(
  control: AbstractControl
): ValidationErrors | null {
  const addressRegex = /^([^,]+),([^,]+),([^,]+)$/;

  if (!addressRegex.test(control.value)) {
    return { invalidAddressFormat: true };
  }

  return null;
}
