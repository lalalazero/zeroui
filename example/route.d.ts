/// <reference types="react" />
import ButtonDemo from './button';
export declare const basicComponentsRoute: {
    title: string;
    children: ({
        title: string;
        path: string;
        component: import("react").FunctionComponent<{}>;
    } | {
        title: string;
        path: string;
        component: typeof ButtonDemo;
    })[];
}[];
