import React from 'react';
import './style.scss';
export interface TagProps {
    visible?: boolean;
    closeable?: boolean;
    onClose?: () => void;
}
declare const Tag: React.FC<TagProps>;
export default Tag;
