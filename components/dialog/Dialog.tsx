import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom'
import Icon from '../icon/Icon'
import { scopedClassMaker } from '../_util/classes'
import './Dialog.scss'

interface Props {
    visible: boolean,
    buttons?: Array<ReactElement>,
    onClose: React.MouseEventHandler,
    maskClosable?: boolean
}

const scopedClassName = scopedClassMaker('zeroUI-dialog')
const sc = scopedClassName

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = e => {
        props.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = e => {
        if(props.maskClosable){
            console.log('click mask...')
            props.onClose(e)
        }
    }
    const x = props.visible ? <Fragment>
        <div className={sc('mask')} onClick={onClickMask}></div>
        <div className={sc('')}>
            <div className={sc('close')} onClick={onClickClose}>
                <Icon name="alipay"></Icon>
            </div>
            <header className={sc('header')}>提示</header>
            <main className={sc('main')}>
                { props.children }
            </main>
            <footer className={sc('footer')}>
                { props.buttons }
            </footer>
        </div>
    </Fragment> : null
    return ReactDOM.createPortal(x, document.body)
}

Dialog.defaultProps = {
    maskClosable: true
}
// ReactElement 只能是标签 ReactNode 可以是字符串
const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: Function) => {
    const close = () => {
        console.log('close modal..')
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog onClose={() => {
        close(); afterClose && afterClose()
    }} buttons={buttons}
                              visible={true}>{ content }</Dialog>
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
    return close
}

const alert = (content:string) => {
    let button = <button key="1" onClick={() => close()}>ok</button>
    const close = modal(content, [button])
}

const confirm = (content:string, yes?: ()=>void, no?: ()=>void) => {
    const onYes = () => {
        close()
        yes && yes()
    }

    const onNo = () => {
        close()
        no && no()
    }
    let buttons = [
        <button key="1" onClick={onYes}>yes</button>,
        <button key="2" onClick={onNo}>no</button>
    ]
    const close = modal(content, buttons)

}

export { alert, confirm, modal }
export default Dialog