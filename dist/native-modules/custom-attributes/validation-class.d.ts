export declare class ReErrorClassCustomAttribute {
    private element;
    private errorClass;
    constructor(element: HTMLElement);
    attached(): void;
    valueChanged(newValue?: boolean): void;
}
export declare class ReSuccessClassCustomAttribute {
    private element;
    private successClass;
    constructor(element: HTMLElement);
    attached(): void;
    valueChanged(newValue?: boolean): void;
}
