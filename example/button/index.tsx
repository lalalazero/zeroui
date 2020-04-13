import React, {FunctionComponent} from 'react'
import DemoCard from "../DemoCard";

// @ts-ignore

import * as content  from './基础类型.md'

const { code, demo, desc, subject } = content.default
console.log(code)
console.log(desc)
console.log(subject)
console.log(typeof demo)
console.log(demo)

const ButtonDemo:FunctionComponent = () => {
    return (
        <div>
            <DemoCard code={code}
                      subject={subject}
                      description={desc}
                      demo={demo}
                      >
            </DemoCard>
        </div>
    )

}
export default ButtonDemo