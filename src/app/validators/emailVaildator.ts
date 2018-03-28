import { FormControl } from '@angular/forms';

export function emailValidator(control: FormControl): {[s: string]: boolean} {
    const re =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!re.test(control.value)) {
        return {emailInvalid: true}
    }

}
