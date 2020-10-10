import { ReactNode } from 'react';
import { extraProps } from './MenuGroup';
export declare const PADDING_BASE = 14;
export declare const PADDING_BASE_GROUP = 8;
export declare const collectItemKeys: (children: ReactNode, cb: any) => void;
export declare const renderChildren: (children: ReactNode, extraProps: extraProps) => any[];
export declare const loopChildren: (children: ReactNode, cb: any) => void;
export declare const detectIndent: (children: ReactNode, level: number) => number;
