import React from 'react';
import { CommonMenuProps } from '.';
export declare const renderMenu: (children: React.ReactNode, props: Partial<CommonMenuProps>) => React.FunctionComponentElement<{
    indentLevel: number;
    type: import("../menu/Menu").modeType;
    key: any;
    onOpenChange: (openKeys: string[]) => void;
    onSelect: (selectParams: import(".").TSelectParam) => void;
    multiple: boolean;
    generateKey: any;
}>[];
export declare const collectMenuKeys: (menuChildren: React.ReactNode, prefix?: string) => string[];
