import { Injectable } from '@angular/core';

import { EmployeeDetails_Base } from '../EmployeeDetails_Base';
import { EmployeeDetails_Dropdown } from '../EmployeeDetails_Dropdown';
import { EmployeeDetails_Textbox } from '../EmployeeDetails_Textbox';

import { of } from 'rxjs';

@Injectable()
export class EmployeeDetailsFormFieldsService {

    getFormFields() {

        const formFields: EmployeeDetails_Base<string>[] = [
    
          new EmployeeDetails_Dropdown({
            key: 'designation',
            label: 'Designation',
            options: [
              {key: 'director',  value: 'Director'},
              {key: 'manager',  value: 'Manager'},
              {key: 'supervisor',   value: 'Supervisor'},
              {key: 'worker', value: 'Worker'}
            ],
            order: 4
          }),
    
          new EmployeeDetails_Textbox({
            key: 'name',
            label: 'Name',
            value: 'Viresh',
            required: true,
            order: 1
          }),

          new EmployeeDetails_Textbox({
            key: 'mobileNumber',
            label: 'Mobile Number',
            type: 'number',
            order: 2
          }),
    
          new EmployeeDetails_Textbox({
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            order: 3
          })
        ];
    
        return of(formFields.sort((a, b) => a.order - b.order));
      }

constructor() { }

}
