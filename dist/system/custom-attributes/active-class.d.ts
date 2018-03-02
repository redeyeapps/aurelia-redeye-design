export declare class ReActiveClassCustomAttribute {
    private element;
    private activeClass;
    constructor(element: HTMLElement);
    attached(): void;
    valueChanged(newValue?: boolean): void;
}
