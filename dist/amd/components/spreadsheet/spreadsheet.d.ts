export declare class ReSpreadsheet {
    private element;
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
    loading: boolean;
    responsiveCols: number;
    constructor(element: HTMLElement);
    attached(): void;
    detached(): void;
    toggleFavourite(id: string): void;
    toggleSelected(id: string): void;
    columnsChanged(nv: {
        responsive: boolean;
    }[]): void;
    handleScroll: () => void;
    handleScrollBound: any;
    scrolled(evt: Event): void;
    handleRowClick(evt: Event, row: any): boolean;
}
