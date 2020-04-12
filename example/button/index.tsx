import React, {FunctionComponent, useState} from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";

import ButtonExample from './Button.example'

// @ts-ignore
import code from '!!raw-loader!./button.md';

const ButtonDemo:FunctionComponent = () => {
    const [codeVisible, setCodeVisible] = useState(false)
    return (
        <div>
            <ButtonExample></ButtonExample>
            <button onClick={() => setCodeVisible(!codeVisible)}>click to show code</button>
            {
                codeVisible && (
                    <Highlight {...defaultProps} code={code} language="jsx">
                        {({className, style, tokens, getLineProps, getTokenProps}) => (
                            <pre className={className} style={style}>
                                {tokens.map((line, i) => (
                                    <div {...getLineProps({line, key: i})}>
                                        {line.map((token, key) => (
                                            <span {...getTokenProps({token, key})} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>)
            }
        </div>
    )

}
export default ButtonDemo