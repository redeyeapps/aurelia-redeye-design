export declare class ReDropdown {
    btnClass: string;
    badgeCount: null;
    private menuOpen;
    private menuEl;
    detached(): void;
    handleButtonClick(): void;
    _clickEventHandler(evt: Event): void;
    _removeEventListener(): void;
    handleEvent(evt: Event): void;
}
