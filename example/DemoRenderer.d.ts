import React from 'react';
export default class renderHOC extends React.Component<{
    className?: string;
    demos: any[];
    api: any;
    layout?: any;
}, any> {
    constructor(props: any);
    render(): JSX.Element;
}
