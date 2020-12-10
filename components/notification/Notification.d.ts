import React, { ReactNode } from 'react';
import './style.scss';
export declare type NoticeContent = Pick<NoticeConfig, 'body' | 'title' | 'key'>;
export declare type NoticeFunc = (noticeContent: NoticeContent) => void;
export interface NotificationInstance {
    notice: NoticeFunc;
    component: Notification;
    destroy: () => void;
}
interface NotificationState {
    notices: NoticeContent[];
}
interface NotificationProps extends NoticeConfig {
    style?: React.CSSProperties;
}
declare class Notification extends React.Component<NotificationProps, NotificationState> {
    static newInstance: (properties: NotificationProps, callback: (instance: NotificationInstance) => void) => void;
    state: NotificationState;
    add: (notice: NotificationProps) => void;
    render(): JSX.Element;
}
export declare type NoticePlacement = 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | 'topCenter' | 'bottomCenter';
export interface NoticeConfig {
    title?: string;
    body?: ReactNode;
    autoClose?: boolean;
    wait?: number;
    placement?: NoticePlacement;
    onClose?: () => void;
    getContainer?: () => HTMLElement;
    key?: React.Key;
}
export interface NotificationApi {
    success(config: NoticeConfig): void;
    error(config: NoticeConfig): void;
    info(config: NoticeConfig): void;
    warning(config: NoticeConfig): void;
    open(config: NoticeConfig): void;
}
declare const _default: NotificationApi;
export default _default;
