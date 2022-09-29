"use strict";
(() => {
var exports = {};
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 5022:
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ 9105:
/***/ ((module) => {

module.exports = require("color");

/***/ }),

/***/ 4470:
/***/ ((module) => {

module.exports = require("fs-extra");

/***/ }),

/***/ 5375:
/***/ ((module) => {

module.exports = require("html-minifier");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 2009:
/***/ ((module) => {

module.exports = require("mjml");

/***/ }),

/***/ 3585:
/***/ ((module) => {

module.exports = require("mjml-react");

/***/ }),

/***/ 4809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ 965:
/***/ ((module) => {

module.exports = require("object-assign");

/***/ }),

/***/ 6634:
/***/ ((module) => {

module.exports = require("open");

/***/ }),

/***/ 9794:
/***/ ((module) => {

module.exports = require("posthog-node");

/***/ }),

/***/ 3920:
/***/ ((module) => {

module.exports = require("prettier");

/***/ }),

/***/ 6850:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 1269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ showPreview)
});

// EXTERNAL MODULE: ./src/util/log.ts + 3 modules
var log = __webpack_require__(9971);
// EXTERNAL MODULE: external "mjml-react"
var external_mjml_react_ = __webpack_require__(3585);
;// CONCATENATED MODULE: ./src/util/mjml.ts

function render(component, options = {}) {
    const mjmlOptions = {
        validationLevel: "soft",
        ...options
    };
    return (0,external_mjml_react_.render)(component, mjmlOptions);
}

// EXTERNAL MODULE: ./src/util/moduleManifestUtil.ts
var moduleManifestUtil = __webpack_require__(1116);
;// CONCATENATED MODULE: ./src/pages/api/previews/[previewClass]/[previewFunction].ts



function showPreview(req, res) {
    // render preview
    const { previewClass , previewFunction  } = req.query;
    if (typeof previewFunction !== "string" || typeof previewClass !== "string") {
        res.writeHead(404);
        res.end("previewClass and previewFunction required");
        return;
    }
    const cleanpreviewFunction = previewFunction.replace(/\.json$/, "");
    const component = (0,moduleManifestUtil/* getPreviewComponent */.vN)(previewClass, cleanpreviewFunction);
    if (component?.props) {
        try {
            const { html , errors  } = render(component);
            if (errors.length) {
                (0,log/* error */.vU)(errors);
            }
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(JSON.stringify({
                html,
                errors
            }));
        } catch (e) {
            (0,log/* error */.vU)("caught error rendering mjml to html", e);
            res.writeHead(500);
            res.end(JSON.stringify(e));
        }
    } else {
        const msg = `${previewFunction}() from previews/${previewClass} must return an email template`;
        (0,log/* error */.vU)(msg);
        res.writeHead(404);
        res.end(msg);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [294,151,337], () => (__webpack_exec__(1269)));
module.exports = __webpack_exports__;

})();