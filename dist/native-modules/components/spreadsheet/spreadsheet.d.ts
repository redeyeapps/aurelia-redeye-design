export declare class ReSpreadsheet {
    private element;
    static id: number;
    data: {
        id: string;
        name: string;
        number: string;
        fileType: string;
        type: string;
        rev: string;
        isFavourite: boolean;
        isSelected: boolean;
    }[];
    columns: {
        key: string;
        label: string;
        type: string;
    }[];
    constructor(element: HTMLElement);
    toggleFavourite(id: string): void;
    toggleSelected(id: string): void;
}
