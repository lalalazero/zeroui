import Highlight, {
    defaultProps,
    Language,
    PrismTheme,
} from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'
import React from 'react'

interface Props {
    code: string
    lang?: Language
}

const HighLightCode: React.FunctionComponent<Props> = (props) => {
    return (
        <Highlight
            {...defaultProps}
            theme={github as PrismTheme}
            code={props.code}
            language={props.lang as Language}
        >
            {({ tokens, getLineProps, className, style, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })} key={i}>
                            {line.map((token, key) => (
                                <span
                                    {...getTokenProps({ token, key })}
                                    key={key}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}
HighLightCode.defaultProps = {
    lang: 'jsx',
}
export default HighLightCode
