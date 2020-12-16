import React, { Fragment, ReactElement, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Icon from '../icon/Icon'
import { classname } from '../_util/classes'
import './Dialog.scss'

export interface DialogProps {
    visible: boolean
    buttons?: Array<ReactElement>
    onClose: React.MouseEventHandler
    maskClosable?: boolean
}

const prefix = 'zeroUI-dialog'

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.maskClosable) {
            console.log('click mask...')
            props.onClose(e)
        }
    }
    const x = props.visible ? (
        <Fragment>
            <div
                className={classname(prefix + '-mask')}
                onClick={onClickMask}
            ></div>
            <div className={classname(prefix)}>
                <div
                    className={classname(prefix + '-close')}
                    onClick={onClickClose}
                >
                    <Icon name="alipay"></Icon>
                </div>
                <header className={classname(prefix + '-header')}>提示</header>
                <main className={classname(prefix + '-main')}>
                    {props.children}
                </main>
                <footer className={classname(prefix + '-footer')}>
                    {props.buttons}
                </footer>
            </div>
        </Fragment>
    ) : null
    return ReactDOM.createPortal(x, document.body)
}

Dialog.defaultProps = {
    maskClosable: true,
}
// ReactElement 只能是标签 ReactNode 可以是字符串
const modal = (
    content: ReactNode,
    buttons?: Array<ReactElement>,
    afterClose?: any
): any => {
    const close = () => {
        console.log('close modal..')
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = (
        <Dialog
            onClose={() => {
                close()
                afterClose && afterClose()
            }}
            buttons={buttons}
            visible={true}
        >
            {content}
        </Dialog>
    )
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
    return close
}

const alert = (content: string) => {
    const button = (
        <button key="1" onClick={() => close()}>
            ok
        </button>
    )
    const close = modal(content, [button])
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close()
        yes && yes()
    }

    const onNo = () => {
        close()
        no && no()
    }
    const buttons = [
        <button key="1" onClick={onYes}>
            yes
        </button>,
        <button key="2" onClick={onNo}>
            no
        </button>,
    ]
    const close = modal(content, buttons)
}

export { alert, modal, confirm }
export default Dialog
