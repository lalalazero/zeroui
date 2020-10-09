import { Language } from 'prism-react-renderer';
import React from 'react';
interface Props {
    code: string;
    lang?: Language;
}
declare const HighLightCode: React.FunctionComponent<Props>;
export default HighLightCode;
