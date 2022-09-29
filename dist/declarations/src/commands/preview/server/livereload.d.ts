/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
export declare const WATCH_IGNORE: RegExp;
export declare function pollShouldReload(req: IncomingMessage, res: ServerResponse): void;
export declare function startChangeWatcher(emailsDir: string): void;
