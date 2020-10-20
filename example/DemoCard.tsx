import { Language } from 'prism-react-renderer'
import React, { ReactNode, useState } from 'react'
import { Icon, Tooltip } from '../components'
import './DemoCard.scss'
import HighLightCode from './HighLightCode'

export interface MarkdownProps {
    code: string
    subject: string
    desc: string
    demo: string
    css?: string
}

export interface DemoCardProps {
    markdown: MarkdownProps
}

export const RenderCode: React.FC<{ code: string; lang?: string }> = (
    props
) => {
    const { code, lang = 'jsx' } = props
    return <HighLightCode code={code} lang={lang as Language}></HighLightCode>
}

const DemoCard: React.FunctionComponent<DemoCardProps> = (props) => {
    const { markdown, children } = props
    const { code, subject, desc, css } = markdown
    const [codeVisible, setVisible] = useState(false)
    const toggleCode = () => {
        setVisible(!codeVisible)
        setCodeIcon(
            codeVisible ? (
                <Icon name="code-open"></Icon>
            ) : (
                <Icon name="code-close"></Icon>
            )
        )
    }
    const [codeIcon, setCodeIcon] = useState<ReactNode>(
        <Icon name="code-open"></Icon>
    )
    return (
        <div className="demo-card">
            <div className="demo-live">{children}</div>
            <p className="demo-subject">
                <span>
                    {subject}
                    <Icon name="edit"></Icon>
                </span>
            </p>
            <p
                className="demo-desc"
                dangerouslySetInnerHTML={{ __html: desc }}
            ></p>
            <div
                className={
                    codeVisible ? 'demo-action code-visible' : 'demo-action'
                }
            >
                <Tooltip title="复制代码" style={{ fontSize: '12px' }}>
                    <span>
                        <Icon name="copy"></Icon>
                    </span>
                </Tooltip>
                <Tooltip
                    title={!codeVisible ? '查看代码' : '收起代码'}
                    style={{ fontSize: '12px' }}
                >
                    <span onClick={toggleCode}>{codeIcon}</span>
                </Tooltip>
            </div>
            <div className="demo-code">
                {codeVisible ? <RenderCode code={code} /> : ''}
                {codeVisible && css && <RenderCode code={css} lang="css" />}
            </div>
        </div>
    )
}

export default DemoCard
