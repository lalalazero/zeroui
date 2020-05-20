import React, { FunctionComponent } from 'react'
import DemoCard from "../DemoCard";
import ButtonExample from './Button.example'

// @ts-ignore

import * as content from './基础类型.md'

const { code, demo, desc, subject } = content.default

const ButtonDemo: FunctionComponent = () => {
    return (
        <div>
            <DemoCard code={code}
                subject={subject}
                description={desc}
                demo={demo}
            >
                <ButtonExample />
            </DemoCard>
        </div>
    )

}
export default ButtonDemo