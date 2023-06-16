export class EmployeeDetails_Base <T> {

    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    controlType: string;
    order: number;
    type: string;
    options: {key: string, value: string}[];

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        controlType?: string;
        order?: number
        type?: string; 
        options?: {key: string, value: string}[];
        } = {}
        ) {

        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.controlType = options.controlType || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || '';
        this.options = options.options || [];

    }
}

