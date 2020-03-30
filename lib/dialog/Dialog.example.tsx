import React, {ReactEventHandler, useState} from 'react'
import Dialog from './Dialog'
const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    const onCloseModal: ReactEventHandler = e => setX(false)
    return (
        <div>
            <button onClick={() => setX(!x)}>点我</button>
            <Dialog visible={x} buttons={
                [
                    <button key="1" onClick={() => { setX(false)}}>11cancel</button>,
                    <button key="2" onClick={() => { setX(false)}}>22ok</button>
                ]} onClose={onCloseModal}
            >
                <div>hi</div>
            </Dialog>
        </div>
    )
}

export default DialogExample