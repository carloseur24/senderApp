"use strict";
exports.id = 786;
exports.ids = [786];
exports.modules = {

/***/ 2737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(8579);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-tiny-popover"
var external_react_tiny_popover_ = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/Tooltip.tsx




const Tooltip = ({ content , trigger  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const handleEsc = (0,external_react_.useCallback)((event)=>{
        if (event.key === "Escape") setShow(false);
    }, []);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("keydown", handleEsc, false);
        return function cleanup() {
            document.removeEventListener("keydown", handleEsc, false);
        };
    }, [
        handleEsc
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_tiny_popover_.Popover, {
                onClickOutside: ()=>setShow(false),
                isOpen: show,
                positions: [
                    "bottom",
                    "left"
                ],
                content: ({ position , childRect , popoverRect  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_tiny_popover_.ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                    , {
                        position: position,
                        childRect: childRect,
                        popoverRect: popoverRect,
                        arrowColor: "#333",
                        arrowSize: 6,
                        className: "popover-arrow-container",
                        arrowClassName: "popover-arrow",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-15582e1f462d57b8" + " " + "popover",
                            children: content
                        })
                    }),
                padding: 4,
                children: trigger(show, setShow)
            }),
            show && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setShow(false),
                className: "jsx-15582e1f462d57b8" + " " + "overlay"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "15582e1f462d57b8",
                children: ".popover.jsx-15582e1f462d57b8{background:#333;color:white;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;padding:16px;margin-right:24px}.overlay.jsx-15582e1f462d57b8{position:absolute;top:65px;right:0;left:0;bottom:0;opacity:0}"
            })
        ]
    });
};
/* harmony default export */ const components_Tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/components/PreviewSender.tsx



const PreviewSender = ({ html , previewFunction , previewClass ,  })=>{
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)(null);
    const { 0: error , 1: setError  } = (0,external_react_.useState)(null);
    const { 0: lastSendAt , 1: setLastSentAt  } = (0,external_react_.useState)(null);
    const { 0: sending , 1: setSending  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!email) {
            setEmail(window.localStorage.getItem("previewSenderEmail"));
            const lastSent = window.localStorage.getItem("previewSenderLastSentAt");
            if (lastSent) {
                setLastSentAt(new Date(lastSent));
            }
        }
    }, [
        email
    ]);
    const send = (0,external_react_.useCallback)(async (e)=>{
        e.preventDefault();
        if (!email) return;
        window.localStorage.setItem("previewSenderEmail", email);
        try {
            setSending(true);
            const payload = {
                to: email,
                html,
                previewFunction,
                previewClass,
                subject: `${previewClass} - ${previewFunction}`
            };
            const response = await fetch("/api/previews/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.error || response.status >= 300) {
                setLastSentAt(null);
                setError(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: data.error || "Unknown error, check your console"
                }));
            } else {
                setError(null);
                const lastSent = new Date();
                setLastSentAt(lastSent);
                window.localStorage.setItem("previewSenderLastSentAt", lastSent.toJSON());
            }
        } catch (e1) {
            console.error(e1);
            setLastSentAt(null);
            window.localStorage.removeItem("previewSenderLastSentAt");
        } finally{
            setSending(false);
        }
    }, [
        html,
        previewClass,
        previewFunction,
        email
    ]);
    const onInputChange = (0,external_react_.useCallback)((e)=>{
        setEmail(e.target.value);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4bf5f0052dc9327d" + " " + "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "jsx-4bf5f0052dc9327d",
                children: "Send a test email"
            }),
            !lastSendAt && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-4bf5f0052dc9327d" + " " + "subtitle",
                children: [
                    "To start sending emails, you must configure a transport in",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-4bf5f0052dc9327d" + " " + "mono",
                        children: "emails/index.tsx"
                    }),
                    ".",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/sofn-xyz/mailing#configure-transport",
                        className: "jsx-4bf5f0052dc9327d",
                        children: "Learn more"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: send,
                className: "jsx-4bf5f0052dc9327d",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        "aria-label": "email",
                        type: "email",
                        placeholder: "name@example.com",
                        value: email || "",
                        onChange: onInputChange,
                        className: "jsx-4bf5f0052dc9327d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "submit",
                        value: "Send",
                        disabled: !email?.length,
                        className: "jsx-4bf5f0052dc9327d"
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-4bf5f0052dc9327d" + " " + "error",
                children: [
                    "⚠ ",
                    error
                ]
            }),
            sending && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-4bf5f0052dc9327d" + " " + "sending",
                children: "Sending..."
            }),
            !sending && lastSendAt && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-4bf5f0052dc9327d" + " " + "last-send",
                children: [
                    "✓ Sent at ",
                    lastSendAt?.toLocaleTimeString()
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "4bf5f0052dc9327d",
                children: '.container.jsx-4bf5f0052dc9327d{max-width:320px;padding-bottom:8px;color:#fff}.container.jsx-4bf5f0052dc9327d>*.jsx-4bf5f0052dc9327d{-webkit-font-smoothing:antialiased}form.jsx-4bf5f0052dc9327d{margin-bottom:8px}input.jsx-4bf5f0052dc9327d{font-size:14px;background:#333;color:#fff;line-height:120%;padding:8px;border:solid 1px#666;-webkit-border-top-left-radius:2px;-moz-border-radius-topleft:2px;border-top-left-radius:2px;-webkit-border-bottom-left-radius:2px;-moz-border-radius-bottomleft:2px;border-bottom-left-radius:2px}input[type="email"].jsx-4bf5f0052dc9327d{border-right:none;min-width:216px}input[type="email"].jsx-4bf5f0052dc9327d:hover{outline:none;border:1px solid#bbb;border-right:none}input[type="email"].jsx-4bf5f0052dc9327d:focus{outline:none;border:1px solid#bbb;border-right:none}.jsx-4bf5f0052dc9327d::-webkit-input-placeholder{color:#aaa}.jsx-4bf5f0052dc9327d:-moz-placeholder{color:#aaa}.jsx-4bf5f0052dc9327d::-moz-placeholder{color:#aaa}.jsx-4bf5f0052dc9327d:-ms-input-placeholder{color:#aaa}.jsx-4bf5f0052dc9327d::-ms-input-placeholder{color:#aaa}.jsx-4bf5f0052dc9327d::placeholder{color:#aaa}input[type="submit"].jsx-4bf5f0052dc9327d{background-color:#fff;color:#000;font-size:12px;border:none;padding:11px 12px 14px;position:relative;top:-2px;border-image-width:0;-webkit-border-top-left-radius:0px;-moz-border-radius-topleft:0px;border-top-left-radius:0px;-webkit-border-bottom-left-radius:0px;-moz-border-radius-bottomleft:0px;border-bottom-left-radius:0px;-webkit-border-top-right-radius:2px;-moz-border-radius-topright:2px;border-top-right-radius:2px;-webkit-border-bottom-right-radius:2px;-moz-border-radius-bottomright:2px;border-bottom-right-radius:2px;-webkit-transition:box-shadow 200ms ease-out;-moz-transition:box-shadow 200ms ease-out;-o-transition:box-shadow 200ms ease-out;transition:box-shadow 200ms ease-out}input[type="submit"].jsx-4bf5f0052dc9327d:hover{cursor:pointer;background:#e4ebfa}input[type="submit"].jsx-4bf5f0052dc9327d:active{-webkit-box-shadow:inset 0 0 12px rgba(0,0,0,.75);-moz-box-shadow:inset 0 0 12px rgba(0,0,0,.75);box-shadow:inset 0 0 12px rgba(0,0,0,.75)}a.jsx-4bf5f0052dc9327d{-webkit-transition:background-color,-webkit-transform 200ms ease-out;-moz-transition:background-color,-moz-transform 200ms ease-out;-o-transition:background-color,-o-transform 200ms ease-out;transition:background-color,-webkit-transform 200ms ease-out;transition:background-color,-moz-transform 200ms ease-out;transition:background-color,-o-transform 200ms ease-out;transition:background-color,transform 200ms ease-out;display:inline-block;color:#fff}a.jsx-4bf5f0052dc9327d:hover{background:#fadf98;color:#333}a.jsx-4bf5f0052dc9327d:active{-webkit-transform:translateY(2px);-moz-transform:translateY(2px);-ms-transform:translateY(2px);-o-transform:translateY(2px);transform:translateY(2px)}h3.jsx-4bf5f0052dc9327d{font-weight:700;font-size:16px;margin:4px 0 12px}.subtitle.jsx-4bf5f0052dc9327d{font-size:12px;margin-top:-4px;margin-bottom:16px;line-height:130%;max-width:288px}.error.jsx-4bf5f0052dc9327d,.sending.jsx-4bf5f0052dc9327d,.last-send.jsx-4bf5f0052dc9327d{font-size:12px}.sending.jsx-4bf5f0052dc9327d,.last-send.jsx-4bf5f0052dc9327d{color:#a4f59c}'
            })
        ]
    });
};
/* harmony default export */ const components_PreviewSender = (PreviewSender);

;// CONCATENATED MODULE: ./src/components/Header.tsx






const Header = ({ title , previewFunction , previewClass , viewMode , setViewMode , helpContent ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-a386650f48abd9ff" + " " + "header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-a386650f48abd9ff" + " " + "path",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "jsx-a386650f48abd9ff" + " " + "index",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-a386650f48abd9ff",
                                children: "previews"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "jsx-a386650f48abd9ff",
                        children: [
                            " / ",
                            title
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-a386650f48abd9ff" + " " + "segmented-control-container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-a386650f48abd9ff" + " " + "segmented-control",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setViewMode("desktop"),
                            className: "jsx-a386650f48abd9ff" + " " + `desktop${viewMode === "desktop" ? " active" : ""}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/icon-desktop.svg",
                                width: "24",
                                height: "20",
                                alt: "Desktop icon",
                                title: "Toggle desktop view"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setViewMode("mobile"),
                            className: "jsx-a386650f48abd9ff" + " " + `mobile${viewMode === "mobile" ? " active" : ""}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/icon-mobile.svg",
                                width: "12.43",
                                height: "22",
                                alt: "Mobile icon",
                                title: "Toggle mobile view"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setViewMode("html"),
                            className: "jsx-a386650f48abd9ff" + " " + `html${viewMode === "html" ? " active" : ""}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/icon-code.svg",
                                width: "21",
                                height: "14.5",
                                alt: "HTML icon",
                                title: "Toggle HTML view"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-a386650f48abd9ff" + " " + "buttons-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Tooltip, {
                        trigger: (show, setShow)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setShow((current)=>!current),
                                className: "jsx-a386650f48abd9ff" + " " + "help",
                                children: show ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/icon-close.svg",
                                    width: "10",
                                    height: "10",
                                    alt: "Close icon",
                                    title: "Close"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/icon-question.svg",
                                    width: "8",
                                    height: "12",
                                    alt: "Close icon",
                                    title: "Close"
                                })
                            }),
                        content: helpContent
                    }),
                    !process.env.NEXT_PUBLIC_STATIC && previewFunction && previewClass && /*#__PURE__*/ jsx_runtime_.jsx(components_Tooltip, {
                        trigger: (show, setShow)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setShow((current)=>!current),
                                className: "jsx-a386650f48abd9ff" + " " + "send",
                                children: show ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/icon-close.svg",
                                    width: "10",
                                    height: "10",
                                    alt: "Close icon",
                                    title: "Close"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/icon-send.svg",
                                    width: "14.43",
                                    height: "14",
                                    alt: "Send icon",
                                    title: "Send a preview"
                                })
                            }),
                        content: /*#__PURE__*/ jsx_runtime_.jsx(components_PreviewSender, {
                            previewFunction: previewFunction,
                            previewClass: previewClass
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "a386650f48abd9ff",
                children: ".header.jsx-a386650f48abd9ff{height:64px;border-bottom:1px dotted#333;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0 24px;-webkit-font-smoothing:antialiased;font-size:14px}.buttons-container.jsx-a386650f48abd9ff{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:right;-webkit-justify-content:right;-moz-box-pack:right;-ms-flex-pack:right;justify-content:right}.buttons-container.jsx-a386650f48abd9ff,.segmented-control-container.jsx-a386650f48abd9ff,.path.jsx-a386650f48abd9ff{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.index.jsx-a386650f48abd9ff{display:inline-block}.segmented-control-container.jsx-a386650f48abd9ff{text-align:center}.segmented-control.jsx-a386650f48abd9ff{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}button.jsx-a386650f48abd9ff{background:#fff;height:40px;border:1px dotted#333;-webkit-transition:background-color,box-shadow 200ms ease-out;-moz-transition:background-color,box-shadow 200ms ease-out;-o-transition:background-color,box-shadow 200ms ease-out;transition:background-color,box-shadow 200ms ease-out;text-align:center}a.jsx-a386650f48abd9ff{-webkit-transition:background-color,-webkit-transform 200ms ease-out;-moz-transition:background-color,-moz-transform 200ms ease-out;-o-transition:background-color,-o-transform 200ms ease-out;transition:background-color,-webkit-transform 200ms ease-out;transition:background-color,-moz-transform 200ms ease-out;transition:background-color,-o-transform 200ms ease-out;transition:background-color,transform 200ms ease-out}a.jsx-a386650f48abd9ff:hover span.jsx-a386650f48abd9ff,button.jsx-a386650f48abd9ff:hover{cursor:pointer;background:#e4ebfa}button.jsx-a386650f48abd9ff:active{-webkit-box-shadow:inset 0 0 12px rgba(0,0,0,.5);-moz-box-shadow:inset 0 0 12px rgba(0,0,0,.5);box-shadow:inset 0 0 12px rgba(0,0,0,.5)}a.jsx-a386650f48abd9ff:active{-webkit-transform:translateY(2px);-moz-transform:translateY(2px);-ms-transform:translateY(2px);-o-transform:translateY(2px);transform:translateY(2px)}.buttons-container.jsx-a386650f48abd9ff{text-align:end}.desktop.jsx-a386650f48abd9ff,.mobile.jsx-a386650f48abd9ff,.html.jsx-a386650f48abd9ff{height:40px;width:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.desktop.jsx-a386650f48abd9ff{border-right:none;-webkit-border-top-left-radius:16px;-moz-border-radius-topleft:16px;border-top-left-radius:16px;-webkit-border-bottom-left-radius:16px;-moz-border-radius-bottomleft:16px;border-bottom-left-radius:16px}.html.jsx-a386650f48abd9ff{border-left:none;-webkit-border-top-right-radius:16px;-moz-border-radius-topright:16px;border-top-right-radius:16px;-webkit-border-bottom-right-radius:16px;-moz-border-radius-bottomright:16px;border-bottom-right-radius:16px}.active.jsx-a386650f48abd9ff{background:#e4ebfa}.help.jsx-a386650f48abd9ff,.send.jsx-a386650f48abd9ff{width:40px;height:40px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0}.help.jsx-a386650f48abd9ff{margin:0 8px 0 0}@media(max-width:768px){.segmented-control-container.jsx-a386650f48abd9ff,.help.jsx-a386650f48abd9ff{display:none}}"
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 6377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8194);



const HotIFrame = ({ viewMode , setViewMode , srcDoc ,  })=>{
    const { iframeRef , textareaRef  } = (0,_hooks_usePreviewHotkeys__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        setViewMode
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            viewMode === "html" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                readOnly: true,
                value: srcDoc,
                ref: textareaRef,
                className: "jsx-28a086413ed86b99" + " " + "code-container mono"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-28a086413ed86b99" + " " + `frame ${viewMode === "mobile" ? " mobile" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    srcDoc: srcDoc,
                    ref: iframeRef,
                    className: "jsx-28a086413ed86b99"
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "28a086413ed86b99",
                children: ".frame.jsx-28a086413ed86b99{margin:auto;display:block}.mobile.frame.jsx-28a086413ed86b99{padding:64px 16px 74px;max-width:324px;-webkit-border-radius:32px;-moz-border-radius:32px;border-radius:32px;margin:64px auto}.mobile.jsx-28a086413ed86b99 iframe.jsx-28a086413ed86b99{height:568px;max-width:320px}iframe.jsx-28a086413ed86b99{width:100%;border:none;height:-webkit-calc(100vh - 65px);height:-moz-calc(100vh - 65px);height:calc(100vh - 65px)}.mobile.jsx-28a086413ed86b99,.mobile.jsx-28a086413ed86b99 iframe.jsx-28a086413ed86b99{border:1px dotted#333}.code-container.jsx-28a086413ed86b99{font-size:10px;white-space:pre-wrap;padding:16px;outline:none;height:-webkit-calc(100vh - 65px);height:-moz-calc(100vh - 65px);height:calc(100vh - 65px);width:100%;resize:none}@media(prefers-color-scheme:dark){.code-container.jsx-28a086413ed86b99{white-space:pre-wrap;color:white;background:#212121}}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HotIFrame);


/***/ }),

/***/ 8194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ hotkeysMap),
/* harmony export */   "Z": () => (/* binding */ usePreviewHotkeys)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__);



const hotkeysMap = {
    showPreviews: "/",
    viewModeDesktop: "1",
    viewModeHTML: "3",
    viewModeMobile: "2",
    viewModeNext: "]",
    viewModePrevious: "["
};
const viewModeOrder = [
    "desktop",
    "mobile",
    "html"
];
// Hotkeys for pages showing previews / intercepts
// Listen for hotkeys on the document and the iframe's
// document, so that they still work if iframe has focus.
function usePreviewHotkeys({ setViewMode  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        switch(e.key){
            case hotkeysMap.showPreviews:
                router.push("/");
                break;
            case hotkeysMap.viewModeDesktop:
                setViewMode("desktop");
                break;
            case hotkeysMap.viewModeHTML:
                setViewMode("html");
                break;
            case hotkeysMap.viewModeMobile:
                setViewMode("mobile");
                break;
            case hotkeysMap.viewModeNext:
                setViewMode((viewMode)=>{
                    const nextIndex = viewModeOrder.indexOf(viewMode) + 1;
                    return viewModeOrder[nextIndex] || viewModeOrder[0];
                });
                break;
            case hotkeysMap.viewModePrevious:
                setViewMode((viewMode)=>{
                    const nextIndex = viewModeOrder.indexOf(viewMode) - 1;
                    return viewModeOrder[nextIndex] || viewModeOrder[viewModeOrder.length - 1];
                });
                break;
        }
    }, [
        router,
        setViewMode
    ]);
    (0,react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_2__.useHotkeys)(Object.values(hotkeysMap).join(","), handleKey);
    const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{
        if (null === node) return;
        node.onload = function onLoad() {
            const doc = node?.contentWindow?.document;
            doc?.addEventListener("keydown", handleKey);
        };
    }, [
        handleKey
    ]);
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{
        if (null === node) return;
        node.onkeydown = handleKey;
    }, [
        handleKey
    ]);
    return {
        iframeRef,
        textareaRef
    };
};


/***/ })

};
;