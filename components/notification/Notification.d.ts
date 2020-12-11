import React, { ReactNode } from 'react';
import './style.scss';
export declare type NoticeContent = Pick<NoticeConfig, 'body' | 'title' | 'key' | 'onClose' | 'wait' | 'autoClose' | 'placement' | 'closeable'> & {
    type?: buildInApiType;
};
export declare type NoticeFunc = (noticeContent: NoticeContent) => void;
export interface NotificationInstance {
    notice: NoticeFunc;
    component: Notification;
    destroy: () => void;
    removeNotice: (key: React.Key) => void;
}
interface NotificationState {
    notices: NoticeContent[];
}
interface NotificationProps extends NoticeConfig {
    style?: React.CSSProperties;
    type?: buildInApiType;
}
declare const otherApi: readonly ["success", "warn", "info", "error", "success2", "warn2", "info2", "error2"];
declare type buildInApiType = typeof otherApi[number];
declare class Notification extends React.Component<NotificationProps, NotificationState> {
    static newInstance: (properties: NotificationProps, callback: (instance: NotificationInstance) => void) => void;
    state: NotificationState;
    add: (originNotice: NotificationProps) => void;
    remove: (key: React.ReactText) => void;
    render(): JSX.Element;
}
export declare type NoticePlacement = 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | 'topCenter' | 'bottomCenter';
export interface NoticeConfig {
    title?: string;
    body?: ReactNode;
    autoClose?: boolean;
    closeable?: boolean;
    wait?: number;
    placement?: NoticePlacement;
    onClose?: () => void;
    getContainer?: () => HTMLElement;
    key?: React.Key;
}
declare type buildInApi = {
    [key in buildInApiType]: (config: NoticeConfig) => void;
};
export interface NotificationApi extends buildInApi {
    open(config: NoticeConfig): void;
}
declare const _default: NotificationApi;
export default _default;
