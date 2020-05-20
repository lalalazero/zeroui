import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import github from 'prism-react-renderer/themes/github';

interface Props {
    code: string,
}

const HighLightCode: React.FunctionComponent<Props> = props => {
    return (
        <Highlight {...defaultProps} theme={github} code={props.code} language="jsx">
            {({ tokens, getLineProps, className, style, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )

}

export default HighLightCode