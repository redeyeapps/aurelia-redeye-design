export declare class ReFormText {
    label: string;
    name: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    inline: boolean;
    hint: string;
    actionHref: string;
    actionLabel: string;
    value: string;
    maxlength: string;
    type: null | string;
    pattern: RegExp | null;
    patternError: string;
    validated: null | boolean;
    private _regex;
    private errorMessage;
    typeChanged(n: string): void;
    patternChanged(): void;
    attached(): void;
    private _resetRegex(newType?);
    handleBlur(): void;
    private _validate();
    readonly isError: boolean;
    readonly isSuccess: boolean | null;
}