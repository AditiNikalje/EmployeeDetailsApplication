import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeDetails_Base } from '../EmployeeDetails_Base';

@Component({
  selector: 'app-EmployeeDetailsDFormContainer',
  templateUrl: './EmployeeDetailsDFormContainer.component.html',
  styleUrls: ['./EmployeeDetailsDFormContainer.component.css']
})
export class EmployeeDetailsDFormContainerComponent implements OnInit {

  @Input() employeeDetails_Base!: EmployeeDetails_Base<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.employeeDetails_Base.key].valid; }

  constructor() { }

  ngOnInit() {
  }

}
