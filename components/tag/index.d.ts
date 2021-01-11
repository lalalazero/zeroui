import React from 'react';
import './style.scss';
interface TagProps {
    visible?: boolean;
    closeable?: boolean;
    onClose?: () => void;
    color?: string;
}
export interface TagInterface extends React.FC<TagProps> {
    CheckableTag: typeof CheckableTag;
}
export interface CheckableTagProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const CheckableTag: React.FC<CheckableTagProps>;
declare const Tag: TagInterface;
export default Tag;
