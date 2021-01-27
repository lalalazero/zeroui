import { PropsWithChildren } from 'react';
export interface useProps extends PropsWithChildren<{}> {
    selectedKeys: string[];
    generateKey: string;
    openKeys: string[];
}
export declare const useSelected: (props: useProps) => boolean;
export declare const useChildSelected: (props: useProps) => boolean;
export declare const useVisible: (props: useProps) => boolean;
