import React, { ReactElement } from 'react';
import './Dialog.scss';
export interface DialogProps {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    maskClosable?: boolean;
}
declare const Dialog: React.FunctionComponent<DialogProps>;
declare const modal: (content: React.ReactNode, buttons?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[] | undefined, afterClose?: Function | undefined) => () => void;
declare const alert: (content: string) => void;
declare const confirm: (content: string, yes?: (() => void) | undefined, no?: (() => void) | undefined) => void;
export { alert, modal, confirm };
export default Dialog;
