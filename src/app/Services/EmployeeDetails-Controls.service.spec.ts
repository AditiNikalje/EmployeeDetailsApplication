/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeDetailsControlsService } from './EmployeeDetails-Controls.service';

describe('Service: EmployeeDetailsControls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDetailsControlsService]
    });
  });

  it('should ...', inject([EmployeeDetailsControlsService], (service: EmployeeDetailsControlsService) => {
    expect(service).toBeTruthy();
  }));
});
