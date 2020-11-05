import React from 'react';
import './style.scss';
declare const NotificationPlacementTypes: ["topRight", "topLeft", "topCenter", "bottomLeft", "bottomRight", "bottomCenter"];
export declare type NotificationPlacement = typeof NotificationPlacementTypes[number];
export declare type NotificationConfig = {
    title?: React.ReactNode;
    body?: React.ReactNode;
    wait?: number;
    autoClose?: boolean;
};
export declare type InstanceConfig = {
    placement?: NotificationPlacement;
    getContainer?: () => HTMLElement;
};
declare class Notification {
    container: Element;
    root: Element;
    mountNode: Element;
    seed: number;
    notifications: any[];
    private constructor();
    remove(seed: number): void;
    open(config: NotificationConfig): void;
    static getIntance(config?: InstanceConfig): Notification;
    static destroy(instance: Notification): undefined;
}
export default Notification;
export declare const notification: Notification;
