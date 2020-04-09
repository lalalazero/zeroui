import React, {FunctionComponent} from 'react'

import ButtonExample from './Button.example'

import code from '!!raw-loader!./button.md';


const ButtonDemo:FunctionComponent = () => {
    return (
        <div>
            <ButtonExample></ButtonExample>
            <button>click to show code</button>
            <pre>
                { code }
            </pre>
        </div>
    )

}
export default ButtonDemo