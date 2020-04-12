import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

interface Props {
    code: string
}

const HighLightCode:React.FunctionComponent<Props> = props => {
    return (
        <Highlight {...defaultProps} code={props.code} language="jsx">
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
        </Highlight>
    )

}

export default HighLightCode