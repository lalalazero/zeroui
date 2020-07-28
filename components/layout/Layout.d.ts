import React, { ReactElement } from 'react';
import './Layout.scss';
interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
}
declare const Layout: React.FunctionComponent<Props>;
export default Layout;
