import React from 'react';
import './style.scss';
declare type NotificationConfig = {
    getContainer?: () => HTMLElement;
    title: string | React.ElementType | React.ComponentType;
    body: string | React.ElementType | React.ComponentType;
    wait?: number;
    autoClose?: boolean;
};
declare const notification: {
    open: (config: NotificationConfig) => void;
};
export default notification;
