export declare class ReSpreadsheetHeading {
    private element;
    column: {
        key: string;
        sortKey: string;
        dir: string;
    };
    constructor(element: HTMLElement);
    click(evt: Event): void;
}
