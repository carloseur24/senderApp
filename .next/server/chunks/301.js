"use strict";
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 2301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8194);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2737);
/* harmony import */ var _HotIFrame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6377);






const Intercept = ({ data  })=>{
    const { 0: viewMode , 1: setViewMode  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("desktop");
    if (!data) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}); // loading, should be quick bc everything is local
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: data.subject || "",
                setViewMode: setViewMode,
                viewMode: viewMode,
                helpContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-bf59865a8bb2f7b" + " " + "title",
                            children: "Hotkeys"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf59865a8bb2f7b" + " " + "hotkey",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "character",
                                    children: _hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_3__/* .hotkeysMap.showPreviews */ .Y.showPreviews
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "description",
                                    children: "Jump to previews"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf59865a8bb2f7b" + " " + "hotkey",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "character",
                                    children: _hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_3__/* .hotkeysMap.viewModeNext */ .Y.viewModeNext
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "description",
                                    children: "Next view mode"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf59865a8bb2f7b" + " " + "hotkey",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "character",
                                    children: _hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_3__/* .hotkeysMap.viewModePrevious */ .Y.viewModePrevious
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "description",
                                    children: "Previous view mode"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf59865a8bb2f7b" + " " + "hotkey",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "character",
                                    children: _hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_3__/* .hotkeysMap.viewModeDesktop */ .Y.viewModeDesktop
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "description",
                                    children: "Desktop view"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf59865a8bb2f7b" + " " + "hotkey",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "character",
                                    children: _hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_3__/* .hotkeysMap.viewModeMobile */ .Y.viewModeMobile
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "description",
                                    children: "Mobile view"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf59865a8bb2f7b" + " " + "hotkey",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "character",
                                    children: _hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_3__/* .hotkeysMap.viewModeHTML */ .Y.viewModeHTML
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-bf59865a8bb2f7b" + " " + "description",
                                    children: "HTML view"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-bf59865a8bb2f7b" + " " + "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-bf59865a8bb2f7b",
                        children: [
                            "Subject: ",
                            `"${data.subject}"`
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-bf59865a8bb2f7b",
                        children: [
                            "To: ",
                            data.to
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-bf59865a8bb2f7b",
                        children: [
                            "From: ",
                            data.from
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-bf59865a8bb2f7b",
                        children: [
                            "CC: ",
                            data.cc
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-bf59865a8bb2f7b",
                        children: [
                            "BCC: ",
                            data.bcc
                        ]
                    })
                ]
            }),
            data.html && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HotIFrame__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                viewMode: viewMode,
                setViewMode: setViewMode,
                srcDoc: data.html
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "bf59865a8bb2f7b",
                children: ".container.jsx-bf59865a8bb2f7b{border-bottom:dotted 1px#333;padding:16px 24px;margin:auto;font-size:12px;line-height:120%}.container.jsx-bf59865a8bb2f7b>*.jsx-bf59865a8bb2f7b{margin:4px 0}.title.jsx-bf59865a8bb2f7b{padding-bottom:4px}.title.jsx-bf59865a8bb2f7b,.character.jsx-bf59865a8bb2f7b{text-transform:uppercase;font-size:10px;line-height:100%}.hotkey.jsx-bf59865a8bb2f7b{font-size:12px;margin:12px 24px 0 0}.character.jsx-bf59865a8bb2f7b{color:#bbb;width:18px;height:18px;border:solid 1px#999;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;text-align:center;margin-right:8px;display:inline-block;line-height:170%}.description.jsx-bf59865a8bb2f7b{position:relative;top:1.25px}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intercept);


/***/ })

};
;