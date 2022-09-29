import { ReactElement } from "react";
export declare function previewTree(): [string, string[]][];
export declare function getPreviewModule(name: string): typeof import("../emails/previews/TextEmail") | typeof import("../emails/previews/Welcome");
export declare function getPreviewComponent(name: string, functionName: string): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare function getConfig(): MailingConfig;
