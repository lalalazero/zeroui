import React, { ReactNode } from 'react';
import './style.scss';
declare const NotificationPlacementTypes: ["topRight", "topLeft", "topCenter", "bottomLeft", "bottomRight", "bottomCenter"];
export declare type NotificationPlacement = typeof NotificationPlacementTypes[number];
export declare type NotificationConfig = {
    title?: React.ReactNode;
    body?: React.ReactNode;
    wait?: number;
    autoClose?: boolean;
    placement?: NotificationPlacement;
};
interface NotificationItemProps {
    seed: string;
    title: string;
    body: ReactNode;
    onClose: () => void;
    wait: number;
    autoClose: boolean;
}
declare const NotificationItem: React.FC<NotificationItemProps>;
export declare type InstanceConfig = {
    placement?: NotificationPlacement;
    getContainer?: () => HTMLElement;
};
interface NotificationItem extends NotificationConfig {
    seed: number;
    onClose: any;
}
declare class Notification {
    container: Element;
    root: Element;
    mountNode: Element;
    seed: number;
    notifications: NotificationItem[];
    instance: Notification | null;
    private constructor();
    private initRoot;
    private adjustPlacement;
    remove(seed: number): void;
    open(config: NotificationConfig): void;
    static getIntance(): Notification;
    static destroy(instance: Notification): undefined;
}
export default Notification;
export declare const notification: Notification;
