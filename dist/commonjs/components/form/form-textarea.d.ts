import { TaskQueue } from 'aurelia-framework';
export declare class ReFormTextarea {
    private taskQueue;
    label: string;
    name: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    inline: boolean;
    hint: string;
    value: string;
    rows: string;
    focusOnAttach: null | boolean;
    private inputElement;
    constructor(taskQueue: TaskQueue);
    attached(): void;
}
