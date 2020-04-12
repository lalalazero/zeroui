import React, {FunctionComponent} from 'react'
import ButtonExample from './Button.example'
import DemoCard from "../DemoCard";

// @ts-ignore
import code from '!!raw-loader!./button.md';

const ButtonDemo:FunctionComponent = () => {
    const description='按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。'
    return (
        <div>
            <DemoCard code={code}
                      subject={'按钮类型'}
                      description={description}
                      demo={ButtonExample}>
                {/*<ButtonExample/>*/}
            </DemoCard>
        </div>
    )

}
export default ButtonDemo