import React from 'react';
export interface Props {
    className?: string;
    demos: any[];
    api: any;
    apiCode?: any;
    colCount?: number;
}
export default class DemoRenderer extends React.Component<Props, any> {
    constructor(props: any);
    renderColumns(): JSX.Element;
    renderApiCode: (apiCode: string) => JSX.Element | "";
    render(): JSX.Element;
}
