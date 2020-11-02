import React from 'react';
import './style.scss';
declare class Notification {
    container: Element;
    instanceNode: Element;
    mountNode: Element;
    seed: number;
    private constructor();
    open(config: any): void;
    mountDom(component: React.ReactElement, childNode: Element): void;
    unmountDom(childNode: Element): void;
    static getIntance(): Notification;
    static destroy(instance: Notification): undefined;
}
export default Notification;
