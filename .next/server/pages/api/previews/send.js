"use strict";
(() => {
var exports = {};
exports.id = 795;
exports.ids = [795];
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

/***/ 5291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showPreviewsIndex)
/* harmony export */ });
/* harmony import */ var _util_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9971);
/* harmony import */ var _moduleManifest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8151);
/* harmony import */ var _util_moduleManifestUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1116);



async function showPreviewsIndex(req, res) {
    if (req.method !== "POST" || !req.body) {
        res.writeHead(404);
        res.end("Not found");
        return;
    }
    const body = req.body;
    // Caller can provide html or preview references, html takes precedence.
    const { html , to , subject , previewClass , previewFunction  } = body;
    let component;
    if (!html && previewClass && previewFunction) {
        component = (0,_util_moduleManifestUtil__WEBPACK_IMPORTED_MODULE_2__/* .getPreviewComponent */ .vN)(previewClass, previewFunction);
    }
    if (!html && !component) {
        (0,_util_log__WEBPACK_IMPORTED_MODULE_0__/* .error */ .vU)("no html provided, no component found");
        res.writeHead(400);
        res.end(JSON.stringify({
            error: "no html provided, no component found"
        }));
        return;
    }
    await (0,_moduleManifest__WEBPACK_IMPORTED_MODULE_1__/* .sendMail */ .Yb)({
        html,
        component,
        to,
        forceDeliver: true,
        subject
    });
    res.json({});
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [294,151,337], () => (__webpack_exec__(5291)));
module.exports = __webpack_exports__;

})();