/// <reference types="react" />
import sendMail from "./emails";
import * as TextEmailPreview from "./emails/previews/TextEmail";
import * as WelcomePreview from "./emails/previews/Welcome";
declare const previews: {
    TextEmail: typeof TextEmailPreview;
    Welcome: typeof WelcomePreview;
};
declare const templates: {
    TextEmail: import("react").FC<{
        name: string;
        headline?: string | undefined;
        body: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        bulletedList?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
        ctaText?: string | undefined;
    }>;
    Welcome: import("react").FC<{
        name: string;
    }>;
};
declare const config: {
    anonymousId: null;
};
export { sendMail, config, templates, previews };
declare const moduleManifest: {
    sendMail: (mail: import("mailing-core").ComponentMail) => Promise<any>;
    config: {
        anonymousId: null;
    };
    templates: {
        TextEmail: import("react").FC<{
            name: string;
            headline?: string | undefined;
            body: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            bulletedList?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            ctaText?: string | undefined;
        }>;
        Welcome: import("react").FC<{
            name: string;
        }>;
    };
    previews: {
        TextEmail: typeof TextEmailPreview;
        Welcome: typeof WelcomePreview;
    };
};
export default moduleManifest;
