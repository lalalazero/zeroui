import React from 'react';
export interface Props {
    className?: string;
    demos: any[];
    api: any;
    colCount?: number;
}
export default class DemoRenderer extends React.Component<Props, any> {
    constructor(props: any);
    renderColumns(): JSX.Element;
    render(): JSX.Element;
}
