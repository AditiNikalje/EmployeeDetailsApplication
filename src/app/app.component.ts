import { Component } from '@angular/core';
import { EmployeeDetails_Base } from './EmployeeDetails_Base';
import { EmployeeDetailsFormFieldsService } from './Services/EmployeeDetailsFormFields.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeDetailsFormFieldsService]
})
export class AppComponent {
  empDetails$: Observable<EmployeeDetails_Base<any>[]>;
  title = 'EmployeeDetailsApp';
  constructor(service: EmployeeDetailsFormFieldsService){
    this.empDetails$ = service.getFormFields();
  }
}
