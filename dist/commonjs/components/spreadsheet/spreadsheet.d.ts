export declare class ReSpreadsheet {
    private element;
    static id: number;
    data: {
        id: string;
        isFavourite: boolean;
        isSelected: boolean;
    }[];
    columns: {
        key: string;
        label: string;
        type: string;
    }[];
    responsiveCols: number;
    constructor(element: HTMLElement);
    toggleFavourite(id: string): void;
    toggleSelected(id: string): void;
    columnsChanged(nv: {
        responsive: boolean;
    }[]): void;
    handleScroll: () => void;
    scrolled(evt: Event): void;
    handleRowClick(evt: Event, row: any): boolean;
}
