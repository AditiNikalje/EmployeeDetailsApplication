import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetails_Base } from '../EmployeeDetails_Base';

@Injectable()
export class EmployeeDetailsControlsService {

    toFormGroup(employeeDetails: EmployeeDetails_Base<string>[]) {
        const group: any = {};

        employeeDetails.forEach(employeeDetail => {
            group[employeeDetail.key] =
            employeeDetail.required ? new FormControl(employeeDetail.value || '', Validators.required)
                                    : new FormControl(employeeDetail.value || '');
        });

        return new FormGroup(group)
    }

constructor() { }

}
