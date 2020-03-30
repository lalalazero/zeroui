import React, {Fragment, ReactElement} from 'react';
import { Icon } from '../index'
import { scopedClassMaker } from '../classes'
import './Dialog.scss'

interface Props {
    visible: boolean,
    buttons: Array<ReactElement>,
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
            props.onClose(e)
        }
    }
    return (
        props.visible ? <Fragment>
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
    )
}

Dialog.defaultProps = {
    maskClosable: true
}
export default Dialog