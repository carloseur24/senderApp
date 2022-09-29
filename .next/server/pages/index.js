"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8579);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_hooks_useLiveReload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(921);
/* harmony import */ var _util_moduleManifestUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5079);







const getStaticProps = async ()=>{
    let previews = (0,_util_moduleManifestUtil__WEBPACK_IMPORTED_MODULE_6__/* .previewTree */ .pi)();
    return {
        props: {
            previews
        }
    };
};
const Home = ({ previews: initialPreviews  })=>{
    const { 0: previews , 1: setPreviews  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialPreviews?.length ? initialPreviews : null);
    const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        const res = await fetch("/api/previews");
        setPreviews((await res.json()).previews);
    }, [
        setPreviews
    ]);
    (0,_components_hooks_useLiveReload__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(fetchData);
    if (!previews) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}); // loading, should be quick bc everything is local
    }
    const showNullState = previews.length === 0 || previews.length === 2 && previews[0][0] === "TextEmail.tsx" && previews[1][0] === "Welcome.tsx" && !process.env.NEXT_PUBLIC_STATIC;
    const logo = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
        src: "/logo-small@2x.png",
        width: "76",
        height: "16",
        alt: "Mailing logo"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-3315a5a0f9e4b19a",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-3315a5a0f9e4b19a" + " " + "container",
                children: [
                    showNullState && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-3315a5a0f9e4b19a" + " " + "eyebrow",
                        children: logo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "jsx-3315a5a0f9e4b19a",
                        children: "previews"
                    }),
                    showNullState && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-3315a5a0f9e4b19a" + " " + "null-sub",
                        children: [
                            "Build new email templates in ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-3315a5a0f9e4b19a" + " " + "code",
                                children: "emails"
                            }),
                            ". Add previews to ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-3315a5a0f9e4b19a" + " " + "code",
                                children: "emails/previews"
                            }),
                            " and they’ll appear below."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "jsx-3315a5a0f9e4b19a"
                    }),
                    previews.map((preview)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-3315a5a0f9e4b19a" + " " + "email-group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "jsx-3315a5a0f9e4b19a",
                                    children: [
                                        "● ",
                                        preview[0]
                                    ]
                                }),
                                preview[1].map((previewFunction)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-3315a5a0f9e4b19a" + " " + "email-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: `/previews/${preview[0]}/${previewFunction}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-3315a5a0f9e4b19a" + " " + "email",
                                                children: previewFunction
                                            })
                                        }, previewFunction)
                                    }, previewFunction))
                            ]
                        }, preview[0]))
                ]
            }),
            !showNullState && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "https://mailing.run",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    target: "_blank",
                    className: "jsx-3315a5a0f9e4b19a" + " " + "footer",
                    children: logo
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3315a5a0f9e4b19a",
                children: ".container.jsx-3315a5a0f9e4b19a{max-width:472px;margin:64px auto 64px;padding:64px 64px 32px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;border:1px dotted#000;-webkit-font-smoothing:antialiased}.eyebrow.jsx-3315a5a0f9e4b19a{margin-bottom:40px}h1.jsx-3315a5a0f9e4b19a{font-size:36px;font-weight:700;margin:0 0 16px;line-height:122%}.null-sub.jsx-3315a5a0f9e4b19a{font-size:20px;max-width:380px;line-height:120%;padding:0 0 16px;line-height:140%}hr.jsx-3315a5a0f9e4b19a{border-top:1px dotted#000;border-bottom:none;margin:24px 0 36px}h2.jsx-3315a5a0f9e4b19a{font-size:20px;line-height:120%;margin-bottom:8px}.code.jsx-3315a5a0f9e4b19a{background-color:#ddd;padding:0 2px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;font-weight:700;font-family:menlo,monospace}.email-group.jsx-3315a5a0f9e4b19a{margin-bottom:32px}.email-container.jsx-3315a5a0f9e4b19a{margin-bottom:8px}a.email.jsx-3315a5a0f9e4b19a{-webkit-transition:background-color,-webkit-transform 200ms ease-out;-moz-transition:background-color,-moz-transform 200ms ease-out;-o-transition:background-color,-o-transform 200ms ease-out;transition:background-color,-webkit-transform 200ms ease-out;transition:background-color,-moz-transform 200ms ease-out;transition:background-color,-o-transform 200ms ease-out;transition:background-color,transform 200ms ease-out;display:inline-block}a.email.jsx-3315a5a0f9e4b19a:hover{background:#e4ebfa}a.email.jsx-3315a5a0f9e4b19a:active{-webkit-transform:translateY(2px);-moz-transform:translateY(2px);-ms-transform:translateY(2px);-o-transform:translateY(2px);transform:translateY(2px)}.footer.jsx-3315a5a0f9e4b19a{display:block;text-align:center;margin-top:-40px;margin-bottom:64px}@media(max-width:600px){.container.jsx-3315a5a0f9e4b19a{border:none;padding:32px}}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [16,939,306,142], () => (__webpack_exec__(1155)));
module.exports = __webpack_exports__;

})();