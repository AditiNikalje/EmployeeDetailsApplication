/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeDetailsFormFieldsService } from './EmployeeDetailsFormFields.service';

describe('Service: EmployeeDetailsFormFields', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDetailsFormFieldsService]
    });
  });

  it('should ...', inject([EmployeeDetailsFormFieldsService], (service: EmployeeDetailsFormFieldsService) => {
    expect(service).toBeTruthy();
  }));
});
