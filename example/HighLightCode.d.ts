import React from "react";
import { Language } from "prism-react-renderer";
interface Props {
    code: string;
    lang?: Language;
}
declare const HighLightCode: React.FunctionComponent<Props>;
export default HighLightCode;
