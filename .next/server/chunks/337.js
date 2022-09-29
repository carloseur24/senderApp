"use strict";
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 9971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vU": () => (/* binding */ log_error)
});

// UNUSED EXPORTS: debug, log, logPlain

// EXTERNAL MODULE: external "chalk"
var external_chalk_ = __webpack_require__(5022);
var external_chalk_default = /*#__PURE__*/__webpack_require__.n(external_chalk_);
// EXTERNAL MODULE: external "fs-extra"
var external_fs_extra_ = __webpack_require__(4470);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
;// CONCATENATED MODULE: ./src/util/paths.ts



// appends /previews to emailsDir string if that directory exists
// otherwise, return null
function getPreviewsDirectory(emailsDir) {
    const previewsDirectory = resolve(emailsDir, "previews");
    return existsSync(previewsDirectory) ? previewsDirectory : null;
}
function paths_readPackageJSON() {
    return paths_readJSONverbose("./package.json");
}
function paths_readJSONverbose(filename) {
    try {
        return readJSONSync(filename);
    } catch (err) {
        error(`expected ${filename} to exist and be valid JSON`);
        throw err;
    }
}
function getMailingAPIBaseURL() {
    if (process.env.MM_DEV) {
        return `http://localhost:3000`;
    } else {
        return "https://www.mailing.run";
    }
}

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: external "prettier"
var external_prettier_ = __webpack_require__(3920);
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6113);
;// CONCATENATED MODULE: ./src/util/config/anonymousId.ts

/*
  Functions for generating an anonymousId and get/set to a singleton
  this is necessary to report analytics the first time you run init,
  when you had no config and so argv has no anonymousId set
*/ let generatedAnonymousId;
// only call getOrSetGeneratedAnonymousId when an anonymousId is missing and *should be set*
// because otherwise setting generatedAnonymousId will create side effects.  The only time we do this
// is when we're generating an anonymousId for the first time
function anonymousId_getOrSetGeneratedAnonymousId() {
    if (generatedAnonymousId) return generatedAnonymousId;
    const id = randomUUID();
    generatedAnonymousId = id;
    return id;
}
function anonymousId_getGeneratedAnonymousId() {
    return generatedAnonymousId;
}

;// CONCATENATED MODULE: ./src/util/config/index.ts






const MAILING_CONFIG_FILE = "./mailing.config.json";
let DEFAULTS;
// defaults for all options
function defaults() {
    if (DEFAULTS === undefined) DEFAULTS = {
        typescript: looksLikeTypescriptProject(),
        emailsDir: existsSync("./src/emails") ? "./src/emails" : "./emails",
        outDir: "./previews_html",
        port: 3883,
        quiet: false
    };
    return DEFAULTS;
}
// options to include in the default config file
const DEFAULT_KEYS_FOR_CONFIG_FILE = (/* unused pure expression or super */ null && ([
    "typescript",
    "emailsDir",
    "outDir",
    "anonymousId", 
]));
// an object to JSON stringify and write to the default config file
function defaultsForConfigFile() {
    // set anonymousId here and not in DEFAULTS so that it getOrSetGeneratedAnonymousId is only called
    // when an anonymousId needs to be generated
    const defaultsToWriteToConfig = {
        ...defaults(),
        anonymousId: getOrSetGeneratedAnonymousId()
    };
    return pick(defaultsToWriteToConfig, DEFAULT_KEYS_FOR_CONFIG_FILE);
}
function looksLikeTypescriptProject() {
    if (existsSync("./tsconfig.json")) {
        return true;
    }
    const pkg = readPackageJSON();
    return !!(pkg.devDependencies?.typescript || pkg.dependencies?.typescript);
}
// write the default mailing.config.json file to get you started
function writeDefaultConfigFile() {
    if (existsSync(MAILING_CONFIG_FILE)) {
        // read the JSON file
        const json = readJSONverbose(MAILING_CONFIG_FILE);
        // check if anonymousId in JSON object
        if ("anonymousId" in json) return;
        // if not, add it
        json.anonymousId = getOrSetGeneratedAnonymousId();
        // ... and overwrite the JSON file
        debug(`patching mailing.config.json to include anonymousId ${getGeneratedAnonymousId()}`);
        const configJsonString = prettier.format(JSON.stringify(json), {
            parser: "json",
            printWidth: 0
        });
        writeFileSync(MAILING_CONFIG_FILE, configJsonString);
        log(`updated mailing.config.json in your project with the following contents:
  ${configJsonString}`);
    } else {
        const configJsonString1 = prettier.format(JSON.stringify(defaultsForConfigFile()), {
            parser: "json",
            printWidth: 0
        });
        writeFileSync(MAILING_CONFIG_FILE, configJsonString1);
        logPlain(`
    ███╗   ███╗ █████╗ ██╗██╗     ██╗███╗   ██╗ ██████╗ 
    ████╗ ████║██╔══██╗██║██║     ██║████╗  ██║██╔════╝ 
    ██╔████╔██║███████║██║██║     ██║██╔██╗ ██║██║  ███╗
    ██║╚██╔╝██║██╔══██║██║██║     ██║██║╚██╗██║██║   ██║
    ██║ ╚═╝ ██║██║  ██║██║███████╗██║██║ ╚████║╚██████╔╝
    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
    
        `);
        log(`added mailing.config.json in your project with the following contents:
${configJsonString1}`);
    }
    log("mailing collects anonymous telemetry data about usage");
}
let config;
function setConfig(newConfig) {
    config = newConfig;
}
function config_getConfig() {
    if (undefined === config) {
        throw new Error("config is undefined");
    }
    return config;
}

;// CONCATENATED MODULE: ./src/util/log.ts


const { DEBUG  } = process.env;
const PREFIX = "mailing";
function log_log(message, ...optionalParams) {
    if (getConfig().quiet && !log_debug) return;
    console.log(chalk.white(PREFIX), message, ...optionalParams);
}
function log_error(message, ...optionalParams) {
    console.error(external_chalk_default().red(PREFIX), message, ...optionalParams);
}
function log_debug(message, ...optionalParams) {
    if (DEBUG) console.info(chalk.yellowBright(PREFIX), message, ...optionalParams);
}
function log_logPlain(message, ...optionalParams) {
    if (getConfig().quiet && !log_debug) return;
    console.log(message, ...optionalParams);
}


/***/ }),

/***/ 1116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pi": () => (/* binding */ previewTree),
/* harmony export */   "vN": () => (/* binding */ getPreviewComponent)
/* harmony export */ });
/* unused harmony exports getPreviewModule, getConfig */
/* harmony import */ var _moduleManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8151);

function previewTree() {
    return Object.keys(_moduleManifest__WEBPACK_IMPORTED_MODULE_0__/* .previews */ .uW).map((previewName)=>{
        const m = _moduleManifest__WEBPACK_IMPORTED_MODULE_0__/* .previews */ .uW[previewName];
        return [
            previewName,
            Object.keys(m)
        ];
    });
}
function getPreviewModule(name) {
    return previews[name];
}
function getPreviewComponent(name, functionName) {
    const previewModule = _moduleManifest__WEBPACK_IMPORTED_MODULE_0__/* .previews */ .uW[name];
    return previewModule[functionName]();
}
function getConfig() {
    return config;
}


/***/ })

};
;