/// <reference types="react" />
import { Button, ButtonGroup } from './button/index';
import Dialog from './dialog/Dialog';
import Icon from './icon/Icon';
import './index.scss';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Layout from './layout/Layout';
import Sider from './layout/Sider';
declare const message: {
    confirm: (content: string, yes?: (() => void) | undefined, no?: (() => void) | undefined) => void;
    modal: (content: import("react").ReactNode, buttons?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>[] | undefined, afterClose?: any) => () => void;
    alert: (content: string) => void;
};
export { default as Col } from './grid/Col';
export { default as Row } from './grid/Row';
export { default as Menu } from './menu/index';
export { default as Pagination } from './pagination';
export { default as Tooltip } from './tooltip/Tooltip';
export { Icon, Dialog, Layout, Content, Header, Footer, Sider, message, Button, ButtonGroup, };
