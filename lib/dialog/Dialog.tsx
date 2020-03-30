import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom'
import { Icon } from '../index'
import { scopedClassMaker } from '../classes'
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

const alert = (content:string) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog onClose={close} visible={true}>{ content }</Dialog>
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
}

export { alert }
export default Dialog