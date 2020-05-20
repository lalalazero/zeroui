import React, { useState } from 'react'
import HighLightCode from './HighLightCode'
import './DemoCard.scss'

export interface DemoCardProps {
    code: string,
    subject: string,
    description: string,
    demo: string,
}

const DemoCard: React.FunctionComponent<DemoCardProps> = props => {
    const { code, subject, description, children } = props
    const [codeVisible, setVisible] = useState(false)
    const [toggleSpanText, setText] = useState('< >')
    const toggleCode = () => {
        setVisible(!codeVisible)
        setText(() => codeVisible ? '</>' : '< >')
    }
    return (
        <div className="demo-card">
            <div id="xxx">
                {
                    children
                }
            </div>
            <p>{subject}</p>
            <p>{description}</p>
            <div onClick={toggleCode}>{toggleSpanText}</div>
            <div>
                {
                    codeVisible ? <HighLightCode code={code}></HighLightCode> : ''
                }
            </div>
        </div>
    )
}

export default DemoCard