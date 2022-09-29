"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 8151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yb": () => (/* binding */ emails_default),
/* harmony export */   "uW": () => (/* binding */ previews),
/* harmony export */   "zd": () => (/* binding */ templates)
/* harmony export */ });
/* unused harmony exports config, default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_nodemailer_lib_nodemailer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3356);
/* harmony import */ var _node_modules_mailing_core_dist_mailing_core_cjs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(676);
/* harmony import */ var _node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);

var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// mailing.config.json
var mailing_config_default = {
    typescript: false,
    emailsDir: "./emails",
    outDir: "./previews_html",
    anonymousId: "3e05b5e3-f0be-4dfa-a3f3-88da85886940"
};
// emails/index.js


var transport = _node_modules_nodemailer_lib_nodemailer_js__WEBPACK_IMPORTED_MODULE_1__.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});
var sendMail = (0,_node_modules_mailing_core_dist_mailing_core_cjs_js__WEBPACK_IMPORTED_MODULE_2__.buildSendMail)({
    transport,
    defaultFrom: "replace@me.with.your.com",
    configPath: "./mailing.config.json"
});
var emails_default = sendMail;
// emails/components/Head.jsx

// emails/components/theme.js
var black = "#000";
var grayDark = "#777";
var grayLight = "#f5f5f5";
var textSm = 14;
var textBase = 16;
var textLg = 24;
var textXl = 30;
var leadingTight = "120%";
var leadingRelaxed = "160%";
var borderBase = 2;
// emails/components/Head.jsx
var Head = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlHead */ .dQ, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlRaw */ .XC, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "color-scheme",
                        content: "light dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "supported-color-schemes",
                        content: "light dark"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlFont */ .sg, {
                name: "Inter",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlStyle */ .GF, {
                children: `
        .smooth {
          -webkit-font-smoothing: antialiased;
        }
        .paragraph a {
          color: ${black} !important;
        }
        .li {
          text-indent: -18px;
          margin-left: 24px;
          display: inline-block;
        }
        .footer a {
          text-decoration: none !important;
          color: ${grayDark} !important;
        }
        .dark-mode {
          display: none;
        }
        @media (min-width:480px) {
          td.hero {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
        @media (prefers-color-scheme: dark) {
          .logo > * {
            filter: invert(1) !important;
          }
          .paragraph > *, .paragraph a, .li > div {
            color: #fff !important;
          }
          .dark-mode {
            display: inherit;
          }
          .light-mode {
            display: none;
          }
        }
      `
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlAttributes */ .HT, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlAll */ .QZ, {
                    "font-family": 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    "font-weight": "400"
                })
            }),
            children
        ]
    });
};
var Head_default = Head;
// emails/components/Header.jsx

var Header = ({ big  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSection */ .Op, {
        padding: big ? "48px 0 40px" : "48px 0 24px",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlColumn */ .jM, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlImage */ .By, {
                padding: "0 24px 0",
                width: big ? "146px" : "91px",
                height: big ? "32px" : "20px",
                align: "left",
                src: "https://s3.amazonaws.com/lab.campsh.com/mailing-logo%402x.png",
                cssClass: "logo"
            })
        })
    });
};
var Header_default = Header;
// emails/components/Footer.jsx

function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSection */ .Op, {
        cssClass: "smooth",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlColumn */ .jM, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                cssClass: "footer",
                padding: "24px 24px 48px",
                fontSize: textSm,
                color: grayDark,
                children: [
                    "\xa9 2022 Mailing\xa0\xa0\xb7\xa0\xa0",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        target: "_blank",
                        children: "Unsubscribe"
                    })
                ]
            })
        })
    });
}
// emails/components/ButtonPrimary.jsx

var ButtonPrimary = ({ link , uiText  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlButton */ .uv, {
                lineHeight: leadingTight,
                fontSize: textBase,
                height: 52,
                padding: "0",
                align: "left",
                href: link,
                backgroundColor: black,
                borderRadius: borderBase,
                cssClass: "light-mode",
                children: uiText
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlButton */ .uv, {
                lineHeight: leadingTight,
                fontSize: textBase,
                height: 52,
                padding: "0",
                align: "left",
                href: link,
                backgroundColor: grayLight,
                color: black,
                borderRadius: borderBase,
                cssClass: "dark-mode",
                children: uiText
            })
        ]
    });
};
var ButtonPrimary_default = ButtonPrimary;
// emails/TextEmail.jsx

var TextEmail = ({ name , headline , body , bulletedList , ctaText  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Mjml */ .ll, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Head_default, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlBody */ .yN, {
                width: 600,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header_default, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSection */ .Op, {
                        padding: "0 24px 0",
                        cssClass: "smooth",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlColumn */ .jM, {
                            children: [
                                headline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    padding: "24px 0 8px",
                                    fontSize: textLg,
                                    lineHeight: leadingTight,
                                    cssClass: "paragraph",
                                    children: headline
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    padding: "16px 0 16px",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: [
                                        "Hello ",
                                        name,
                                        ","
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    cssClass: "paragraph",
                                    padding: "0",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: body
                                    })
                                }),
                                bulletedList && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSpacer */ .qG, {
                                            height: "16px"
                                        }),
                                        bulletedList
                                    ]
                                }),
                                ctaText && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSpacer */ .qG, {
                                            height: "24px"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonPrimary_default, {
                                            link: "#",
                                            uiText: ctaText
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSpacer */ .qG, {
                                            height: "8px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    padding: "16px 0",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: [
                                        "♥,",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Mailing"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
                ]
            })
        ]
    });
};
var TextEmail_default = TextEmail;
// emails/Welcome.jsx

// emails/components/BulletedList.jsx

var BulletedList = ({ items  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                padding: "1px 0 0",
                fontSize: textBase,
                lineHeight: leadingRelaxed,
                cssClass: "li",
                children: [
                    "•\xa0\xa0",
                    item
                ]
            }, item))
    });
};
var BulletedList_default = BulletedList;
// emails/Welcome.jsx
var MyFirstEmail = ({ name  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Mjml */ .ll, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Head_default, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlBody */ .yN, {
                width: 600,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header_default, {
                        big: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSection */ .Op, {
                        padding: "0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlColumn */ .jM, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlImage */ .By, {
                                cssClass: "hero",
                                padding: "0 0 40px",
                                align: "left",
                                src: "https://s3.amazonaws.com/lab.campsh.com/welcome%402x.jpg"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSection */ .Op, {
                        padding: "0 24px 0",
                        cssClass: "smooth",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlColumn */ .jM, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    cssClass: "paragraph",
                                    padding: "0",
                                    fontSize: textXl,
                                    lineHeight: leadingTight,
                                    children: [
                                        "Welcome, ",
                                        name,
                                        "!"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    padding: "24px 0 16px",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: "Mailing makes it easy to send great emails from your React app. Here’s a bit about Mailing in a nutshell:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BulletedList_default, {
                                    items: [
                                        "Email templates with React components",
                                        "MJML components that work across clients (Outlook!)",
                                        "Preview server for quick development",
                                        "Dev mode opens emails in your browser instead of sending",
                                        "Test mode for ensuring emails send and have the correct content",
                                        "Plays well with js frameworks like redwood.js, remix, next.js",
                                        "Written in Typescript, inspired by Action Mailer from Ruby on Rails"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSpacer */ .qG, {
                                    height: "24px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonPrimary_default, {
                                    link: "https://github.com/sofn-xyz/mailing",
                                    uiText: "View Github Repo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSpacer */ .qG, {
                                    height: "24px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    cssClass: "paragraph",
                                    padding: "0",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    children: "Thank you for checking out our project. We’d love to hear your ideas on how we can make sending great emails more fun and simple."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    padding: "16px 0 0",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: [
                                        "♥,",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Mailing"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
                ]
            })
        ]
    });
var Welcome_default = MyFirstEmail;
// emails/previews/AccountCreated.jsx
var AccountCreated_exports = {};
__export(AccountCreated_exports, {
    default: ()=>AccountCreated_default
});

var AccountCreated = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Mjml */ .ll, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Head_default, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlBody */ .yN, {
                width: 600,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header_default, {
                        big: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSection */ .Op, {
                        padding: "0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlColumn */ .jM, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlImage */ .By, {
                                cssClass: "hero",
                                padding: "0 0 40px",
                                align: "left",
                                src: "https://s3.amazonaws.com/lab.campsh.com/welcome%402x.jpg"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSection */ .Op, {
                        padding: "0 24px 0",
                        cssClass: "smooth",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlColumn */ .jM, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    cssClass: "paragraph",
                                    padding: "0",
                                    fontSize: textXl,
                                    lineHeight: leadingTight,
                                    children: "Welcome, dear User!"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlText */ .HK, {
                                    padding: "24px 0 16px",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: "Thank you to register and to confidence in us!"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BulletedList_default, {
                                    items: [
                                        "You will enjoy our service all a month",
                                        "Our service aims to be the best option in ensuring the timely reminder of the activities of interest to you.",
                                        "You might change your reminder when you want without a limit",
                                        "You enjoy of a basic plan with 2 reminders but you can upgrade at any time to have many more.",
                                        "You Are completely free to leave you feedback"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSpacer */ .qG, {
                                    height: "24px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonPrimary_default, {
                                    link: "https://dashboard-react-e1xk226s7-carloseur24.vercel.app/#/kanban",
                                    uiText: "Go to App"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_mjml_react_dist_src_index_js__WEBPACK_IMPORTED_MODULE_3__/* .MjmlSpacer */ .qG, {
                                    height: "24px"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
                ]
            })
        ]
    });
var AccountCreated_default = AccountCreated;
// emails/previews/TextEmail.jsx
var TextEmail_exports = {};
__export(TextEmail_exports, {
    accountDeleted: ()=>accountDeleted,
    newSignIn: ()=>newSignIn,
    resetPassword: ()=>resetPassword
});
function resetPassword() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextEmail_default, {
        name: "Amelita",
        body: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "We’ve received your request to change your password. Use the link below to set up a new password for your account. This link is only usable once! If you need to, you can reinitiate the password process again ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#",
                    children: "here"
                }),
                "."
            ]
        }),
        ctaText: "Reset Password"
    });
}
function accountDeleted() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextEmail_default, {
        name: "Amelita",
        body: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "We’ve received your request to delete your account and your account has been deleted. We’re sad to see you go! If you’ve changed your mind or did this on accident, just reply to this email and let us know."
        })
    });
}
function newSignIn() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextEmail_default, {
        headline: "New sign-in detected",
        name: "Amelita",
        body: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "We’ve received your request to delete your Mailing account. Your account has been deleted. If you changed your mind or did this on accident, reply to this email and let us know."
        }),
        bulletedList: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BulletedList_default, {
            items: [
                "Date: July 14, 2022 4:26 PM PST",
                "Device: Mac",
                "Browser: Safari",
                "Location: Los Angeles, CA",
                "IP Address: XXX.XX.XXX.XX"
            ]
        })
    });
}
// emails/previews/Welcome.jsx
var Welcome_exports = {};
__export(Welcome_exports, {
    toAmelita: ()=>toAmelita
});
function toAmelita() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Welcome_default, {
        name: "Amelita"
    });
}
// .mailing/src/moduleManifest.ts
var previews = {
    AccountCreated: AccountCreated_exports,
    TextEmail: TextEmail_exports,
    Welcome: Welcome_exports
};
var templates = {
    TextEmail: TextEmail_default,
    Welcome: Welcome_default
};
var moduleManifest = {
    sendMail: emails_default,
    templates,
    previews
};
var moduleManifest_default = (/* unused pure expression or super */ null && (moduleManifest));



/***/ })

};
;