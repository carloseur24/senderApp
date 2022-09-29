"use strict";
(() => {
var exports = {};
exports.id = 99;
exports.ids = [99];
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

/***/ 3586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "mailing-core"
const external_mailing_core_namespaceObject = require("mailing-core");
// EXTERNAL MODULE: ./src/moduleManifest.js
var moduleManifest = __webpack_require__(8151);
;// CONCATENATED MODULE: ./src/pages/api/render.ts



function renderTemplate(templateName, props) {
    const Template = moduleManifest/* templates */.zd[templateName];
    if (!Template) {
        return {
            error: `Template ${templateName} not found in list of templates: ${Object.keys(moduleManifest/* templates */.zd).join(", ")}`
        };
    }
    return (0,external_mailing_core_namespaceObject.render)(external_react_default().createElement(Template, props));
}
function handler(req, res) {
    const { templateName , props  } = req.query;
    // validate template name
    if (typeof templateName !== "string") {
        return res.status(403).json({
            error: "templateName must be specified"
        });
    }
    // parse props
    let parsedProps = {};
    try {
        parsedProps = JSON.parse(decodeURIComponent(props));
    } catch  {
        return res.status(403).json({
            error: "props could not be parsed from querystring"
        });
    }
    const { error , mjmlErrors , html  } = renderTemplate(templateName.replace(/\.[jt]sx?$/, ""), parsedProps);
    if (error) {
        return res.status(404).json({
            error
        });
    }
    res.status(200).json({
        html,
        mjmlErrors
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [294,151], () => (__webpack_exec__(3586)));
module.exports = __webpack_exports__;

})();