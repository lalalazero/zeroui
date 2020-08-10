import React from 'react';
export interface MenuContextProps {
    selectedKey: string;
    changeKey?: (a: string) => void;
    allKeys: Set<string>;
}
export declare const allKeys: Set<string>;
export declare const addItemKey: (key: string) => Set<string>;
export declare const defaultContextValue: {
    selectedKey: string;
    changeKey: (newKey: string) => void;
    allKeys: Set<string>;
};
declare const MenuContext: React.Context<MenuContextProps>;
export default MenuContext;
