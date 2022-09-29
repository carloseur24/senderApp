export declare const MAILING_CONFIG_FILE = "./mailing.config.json";
declare type ConfigDefaults = {
    typescript: boolean;
    emailsDir: string;
    outDir: string;
    port: number;
    quiet: boolean;
};
export declare function defaults(): ConfigDefaults;
export declare function looksLikeTypescriptProject(): boolean;
export declare function writeDefaultConfigFile(): void;
declare type Config = {
    emailsDir: string;
    quiet: boolean;
    port: number;
};
export declare function setConfig(newConfig: Config): void;
export declare function getConfig(): Config;
export {};
