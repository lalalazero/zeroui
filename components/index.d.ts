/// <reference types="react" />
import Icon from './icon/Icon';
import Dialog from './dialog/Dialog';
import Layout from './layout/Layout';
import Content from "./layout/Content";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Sider from "./layout/Sider";
import { Button, ButtonGroup } from './button/index';
import './index.scss';
declare const message: {
    confirm: (content: string, yes?: (() => void) | undefined, no?: (() => void) | undefined) => void;
    modal: (content: import("react").ReactNode, buttons?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>[] | undefined, afterClose?: Function | undefined) => () => void;
    alert: (content: string) => void;
};
export { Icon, Dialog, Layout, Content, Header, Footer, Sider, message, Button, ButtonGroup };
export { default as Row } from './grid/Row';
export { default as Col } from './grid/Col';
export { default as Tooltip } from './tooltip/Tooltip';
