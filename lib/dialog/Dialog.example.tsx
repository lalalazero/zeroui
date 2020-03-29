import React, { useState } from 'react'
import Dialog from './Dialog'
const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    return (
        <div>
            <button onClick={() => setX(!x)}>点我</button>
            <Dialog visible={x}>
                <div>hi</div>
            </Dialog>
        </div>
    )
}

export default DialogExample