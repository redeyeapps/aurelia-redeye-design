export declare class ReFormScale {
    label: string;
    name: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    inline: boolean;
    hint: string;
    value: string;
    min: string;
    max: string;
    step: string;
    prefix: string;
    suffix: string;
    incrementValue(): void;
    decrementValue(): void;
    private _incrementValue(direction?);
}
