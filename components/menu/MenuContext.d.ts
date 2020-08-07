import React from 'react';
export interface MenuContextProps {
    selectedKey: string;
    changeKey: (a: string) => string;
}
export declare const defaultContextValue: {
    selectedKey: string;
    changeKey: (newKey: string) => string;
};
declare const MenuContext: React.Context<MenuContextProps>;
export default MenuContext;
