import { EmployeeDetails_Base } from "./EmployeeDetails_Base";

export class EmployeeDetails_Dropdown extends EmployeeDetails_Base<string> {
    override controlType: string = 'dropdown';
}
