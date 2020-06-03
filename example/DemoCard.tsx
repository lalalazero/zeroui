import React, { useState, ReactNode } from 'react'
import HighLightCode from './HighLightCode'
import { Icon } from '../components'
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
    const toggleCode = () => {
        setVisible(!codeVisible)
        setCodeIcon(codeVisible ? <Icon name='code-open'></Icon> : <Icon name='code-close'></Icon>)
    }
    const [codeIcon, setCodeIcon] = useState<ReactNode>(<Icon name='code-open'></Icon>)
    return (
        <div className="demo-card">
            <div className='demo-live'>
                {
                    children
                }
            </div>
            <p className='demo-subject'><span>{subject}<Icon name="edit"></Icon></span></p>
            <p className='demo-desc' dangerouslySetInnerHTML={{__html: description}}></p>
            <div className={codeVisible ? 'demo-action code-visible' : 'demo-action'}
                onClick={toggleCode}><span><Icon name="copy"></Icon></span><span>{codeIcon}</span></div>
            <div className='demo-code'>
                {
                    codeVisible ? <HighLightCode
                        code={code}></HighLightCode> : ''
                }
            </div>
        </div>
    )
}

export default DemoCard