import { EmployeeDetails_Base } from "./EmployeeDetails_Base";

export class EmployeeDetails_Textbox extends EmployeeDetails_Base<string> {
    override controlType: string = 'textbox';
}
