export declare class ReTileList {
    private element;
    data: {
        id: string;
    }[];
    config: {
        [entityType: string]: {
            icon: {
                class: string;
            };
            content: {
                title: {
                    key: string;
                };
                subtitle: {
                    key: string;
                };
            };
        };
    };
    loading: boolean;
    constructor(element: HTMLElement);
    attached(): void;
    detached(): void;
    handleTileClick(tile: any): boolean;
    handleScroll: () => void;
    handleScrollBound: any;
    scrolled(evt: Event): void;
}
