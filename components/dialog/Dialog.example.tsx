import React, {ReactEventHandler, useState} from 'react'
import Dialog, { alert, confirm, modal } from './Dialog'
import './Dialog.example.scss'

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)
    const onCloseModal: ReactEventHandler = e => setX(false)
    const onCloseModal2: ReactEventHandler = e => setY(false)
    const yesCallback = () => { console.log('yes callback..')}
    const noCallback = () => { console.log('no callback..')}
    const modalContent = <button
        onClick={() => {console.log('modal button clicked.')}}>
        button
    </button>
    return (
        <div>
            <div>
                <button onClick={() => modal(modalContent)}>
                    modal
                </button>
            </div>
            <div>
                <button onClick={() => alert('xxxx alert content')}>alert</button>
            </div>
            <div>
                <button onClick={() => confirm('confirm', yesCallback, noCallback)}>confirm</button>
            </div>
            <div>
                <button onClick={() => confirm('confirm22222')}>confirm222</button>
            </div>
            <div>
                <h2>example dialog 1</h2>
                <button onClick={() => setX(!x)}>点我</button>
                <Dialog visible={x} buttons={
                    [
                        <button key="1" onClick={() => { setX(false)}}>11111cancel</button>,
                        <button key="2" onClick={() => { setX(false)}}>22222ok</button>
                    ]} onClose={onCloseModal}
                >
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h2>example dialog 2</h2>
                <button onClick={() => setY(!y)}>点我</button>
                <Dialog visible={y} buttons={
                    [
                        <button key="1" onClick={() => { setY(false)}}>11cancel</button>,
                        <button key="2" onClick={() => { setY(false)}}>22ok</button>
                    ]} onClose={onCloseModal2}
                >
                    <div>hi</div>
                </Dialog>
            </div>

        </div>
    )
}

export default DialogExample