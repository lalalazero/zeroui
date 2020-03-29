import React, { Fragment } from 'react';
import { Icon } from '../index'
import { scopedClassMaker } from '../classes'
import './Dialog.scss'

interface Props {
    visible: boolean
}

const scopedClassName = scopedClassMaker('zeroUI-dialog')

const sc = scopedClassName

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ? <Fragment>
            <div className={sc('mask')}></div>
            <div className={sc('')}>
                <div className={sc('close')}>
                    <Icon name="alipay"></Icon>
                </div>
                <header className={sc('header')}>提示</header>
                <main className={sc('main')}>
                    { props.children }
                </main>
                <footer className={sc('footer')}>
                    <button>ok</button>
                    <button>cancel</button>
                </footer>
            </div>
        </Fragment> : null
    )
}
export default Dialog