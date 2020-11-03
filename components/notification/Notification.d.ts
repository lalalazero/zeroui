import React from 'react';
import './style.scss';
declare type NotificationConfig = {
    getContainer?: () => HTMLElement;
    title: string | React.ElementType | React.ComponentType;
    body: string | React.ElementType | React.ComponentType;
    wait?: number;
    autoClose?: boolean;
};
declare class Notification {
    container: Element;
    instanceNode: Element;
    mountNode: Element;
    seed: number;
    notifications: any[];
    private constructor();
    remove(seed: number): void;
    open(config: NotificationConfig): void;
    static getIntance(): Notification;
    static destroy(instance: Notification): undefined;
}
export default Notification;
export declare const notification: Notification;
