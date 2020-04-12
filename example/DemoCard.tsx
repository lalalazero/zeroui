import React, {useState} from 'react'
import HighLightCode from './HighLightCode'
import './DemoCard.scss'

export interface DemoCardProps {
    code: string,
    subject: string,
    description: string,
    demo: React.FunctionComponent
}

const DemoCard:React.FunctionComponent<DemoCardProps> = props => {
    const { code, subject, description, demo } = props
    const [ codeVisible, setVisible ] = useState(false)
    const [ toggleSpanText, setText ] = useState('< >')
    const toggleCode = () => {
        setVisible(!codeVisible)
        setText(() => codeVisible ? '</>' : '< >')
    }
    return (
        <div className="demo-card">
            {
                demo({})
            }
            <p>{ subject }</p>
            <p>{ description }</p>
            <div onClick={toggleCode}>{ toggleSpanText }</div>
            <div>
                {
                    codeVisible ? <HighLightCode code={code}></HighLightCode> : ''
                }
            </div>
        </div>
    )
}

export  default DemoCard