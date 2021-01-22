import React from 'react';
import { CommonMenuProps } from '.';
export declare const renderMenu: (children: React.ReactNode, props: Partial<CommonMenuProps>) => React.ReactNode[];
export declare const collectMenuKeys: (menuChildren: React.ReactNode, prefix?: string) => string[];
