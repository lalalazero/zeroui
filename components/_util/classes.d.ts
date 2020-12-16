declare type classnameArg = undefined | string | {
    [x: string]: boolean | undefined;
};
declare type classnameProp = classnameArg[];
export declare function classname(...arg: classnameProp): string;
export {};
