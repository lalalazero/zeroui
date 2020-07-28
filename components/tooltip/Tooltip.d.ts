import React from 'react';
import './Tooltip.scss';
declare const TooltipPlacements: ["top", "bottom", "left", "right"];
export declare type TooltipPlacementType = typeof TooltipPlacements[number];
export interface ToolTipProps extends React.HTMLProps<HTMLDivElement | HTMLSpanElement> {
    title?: string;
    mouseLeaveDelay?: number;
    placement?: TooltipPlacementType;
}
declare const Tooltip: React.FC<ToolTipProps>;
export default Tooltip;
