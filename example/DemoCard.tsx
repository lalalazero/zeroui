import React, { useState, ReactNode } from 'react'
import HighLightCode from './HighLightCode'
import { Icon } from '../components'
import './DemoCard.scss'
import { Language } from 'prism-react-renderer'

export interface MarkdownProps {
    code: string,
    subject: string,
    desc: string,
    demo: string,
    css?: string,
}

export interface DemoCardProps {
    markdown: MarkdownProps
}

const DemoCard: React.FunctionComponent<DemoCardProps> = props => {
    const { markdown, children } = props
    const { code, subject, desc, css } = markdown
    const [codeVisible, setVisible] = useState(false)
    const toggleCode = () => {
        setVisible(!codeVisible)
        setCodeIcon(codeVisible ? <Icon name='code-open'></Icon> : <Icon name='code-close'></Icon>)
    }
    const [codeIcon, setCodeIcon] = useState<ReactNode>(<Icon name='code-open'></Icon>)
    const renderCode = (code: string, lang = 'jsx') => <HighLightCode code={code} lang={lang as Language}></HighLightCode>
    return (
        <div className="demo-card">
            <div className='demo-live'>
                {
                    children
                }
            </div>
            <p className='demo-subject'><span>{subject}<Icon name="edit"></Icon></span></p>
            <p className='demo-desc' dangerouslySetInnerHTML={{__html: desc}}></p>
            <div className={codeVisible ? 'demo-action code-visible' : 'demo-action'}
                onClick={toggleCode}><span><Icon name="copy"></Icon></span><span>{codeIcon}</span></div>
            <div className='demo-code'>
                {
                    codeVisible ? renderCode(code) : ''
                }
                {
                    codeVisible && css && renderCode(css, 'css')
                }
            </div>
        </div>
    )
}

export default DemoCard