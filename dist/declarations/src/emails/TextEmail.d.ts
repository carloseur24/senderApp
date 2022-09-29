import { ReactElement } from "react";
declare type TextEmailProps = {
    name: string;
    headline?: string;
    body: ReactElement;
    bulletedList?: ReactElement;
    ctaText?: string;
};
declare const TextEmail: React.FC<TextEmailProps>;
export default TextEmail;
