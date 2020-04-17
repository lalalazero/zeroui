import React, {useState, useEffect} from 'react'
import HighLightCode from './HighLightCode'
import './DemoCard.scss'

export interface DemoCardProps {
    code: string,
    subject: string,
    description: string,
    demo: string,
}

const DemoCard:React.FunctionComponent<DemoCardProps> = props => {
    const { code, subject, description, demo } = props
    const [ codeVisible, setVisible ] = useState(false)
    const [ toggleSpanText, setText ] = useState('< >')
    const toggleCode = () => {
        setVisible(!codeVisible)
        setText(() => codeVisible ? '</>' : '< >')
    }
    useEffect(()=>{
        console.log('eval 执行。。。', demo)
        // eval(demo)
    },[])
    return (
        <div className="demo-card">
            <div id="xxx"></div>
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