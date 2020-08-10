import { ReactElement, ReactNode } from 'react';
export declare const PADDING_BASE = 14;
export declare const PADDING_BASE_GROUP = 8;
export declare const collectItemKeys: (children: ReactNode) => void;
export declare const renderChildren: (children: ReactNode, extraProps: any) => ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>[];
export declare const loopChildren: (children: ReactNode, cb: any) => void;
export declare const detectIndent: (children: ReactNode, level: number) => number;
