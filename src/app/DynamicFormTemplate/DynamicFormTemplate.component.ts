import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeDetails_Base } from '../EmployeeDetails_Base';
import { EmployeeDetailsControlsService } from '../Services/EmployeeDetails-Controls.service';

@Component({
  selector: 'app-DynamicFormTemplate',
  templateUrl: './DynamicFormTemplate.component.html',
  styleUrls: ['./DynamicFormTemplate.component.css']
})
export class DynamicFormTemplateComponent implements OnInit {

  @Input() empDetails: EmployeeDetails_Base<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private empDetailsControlService: EmployeeDetailsControlsService) { }

  ngOnInit() {
    this.form = this.empDetailsControlService.toFormGroup(this.empDetails as EmployeeDetails_Base<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
