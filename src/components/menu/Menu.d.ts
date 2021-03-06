interface MenuProps {
    popup?: boolean;
    model?: any[];
    appendTo?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
}

declare class Menu {
    $props: MenuProps;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
}

export default Menu;
