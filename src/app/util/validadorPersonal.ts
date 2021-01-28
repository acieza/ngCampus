import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export const queSeanIguales: ValidatorFn = (

    control: FormGroup
): ValidationErrors | null => {

    const password = control.get('password');
    const vpassword = control.get('vpassword');

    return password.value === vpassword.value
           ? null
           : {noIguales:true}
}