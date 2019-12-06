import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function typesValidator(): ValidatorFn {

  let types = ['PUBLIC', 'NATIONAL'];

  return (control: AbstractControl): {[key: string]: any} | null => {
    const valid = types.includes(control.value);
    return !valid ? {'toto': {value: control.value}} : null;
  };

}
