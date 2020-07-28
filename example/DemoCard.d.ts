import React from 'react';
import './DemoCard.scss';
export interface MarkdownProps {
    code: string;
    subject: string;
    desc: string;
    demo: string;
    css?: string;
}
export interface DemoCardProps {
    markdown: MarkdownProps;
}
declare const DemoCard: React.FunctionComponent<DemoCardProps>;
export default DemoCard;
