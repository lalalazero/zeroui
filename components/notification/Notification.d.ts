import React from 'react';
import './style.scss';
export interface NotificationConfig {
    getContainer?: () => HTMLElement;
    title: string | React.ElementType | React.ComponentType;
    body: string | React.ElementType | React.ComponentType;
}
declare const notification: {
    open: (config: NotificationConfig) => void;
};
export default notification;
