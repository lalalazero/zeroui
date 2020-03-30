import React, {ReactEventHandler, useState} from 'react'
import Dialog from './Dialog'
import './Dialog.example.scss'

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)
    const onCloseModal: ReactEventHandler = e => setX(false)
    const onCloseModal2: ReactEventHandler = e => setY(false)
    return (
        <div>
            <div style={{ position:'relative' ,border: '1px solid red', zIndex: 999, color: 'red' }}>
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