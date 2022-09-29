"use strict";
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useLiveReload)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/commands/util/livereloadUtil.ts
// This file is for livereload stuff used on both client and server.
const LONG_POLLING_INTERVAL = 20000;
const SHORT_POLLING_INTERVAL = 50;

;// CONCATENATED MODULE: ./src/components/hooks/useLiveReload.tsx


function useLiveReload(onShouldReload) {
    const vectorClock = (0,external_react_.useRef)(0);
    (0,external_react_.useEffect)(()=>{
        onShouldReload();
        if (true) {
            // we don't actually want live relaoad in production, just fetch
            return;
        }
        async function checkForReload() {
            const shouldReload = await fetch(`/should_reload.json?vectorClock=${vectorClock.current}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await shouldReload.json();
            if (json["vectorClock"] > vectorClock.current) {
                vectorClock.current = json["vectorClock"];
                onShouldReload();
                checkForReload();
            }
        }
        const interval = setInterval(checkForReload, LONG_POLLING_INTERVAL);
        checkForReload();
        return ()=>{
            clearInterval(interval);
        };
    }, [
        vectorClock
    ]);
};


/***/ }),

/***/ 5079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vN": () => (/* binding */ getPreviewComponent),
  "pi": () => (/* binding */ previewTree)
});

// UNUSED EXPORTS: getConfig, getPreviewModule

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(4512);
// EXTERNAL MODULE: ../node_modules/mailing-core/dist/mailing-core.cjs.js
var mailing_core_cjs = __webpack_require__(8778);
// EXTERNAL MODULE: ../node_modules/mjml-react/dist/src/index.js
var src = __webpack_require__(5611);
;// CONCATENATED MODULE: ./src/moduleManifest.js

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


var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});
var sendMail = (0,mailing_core_cjs.buildSendMail)({
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlHead */.dQ, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlRaw */.XC, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "color-scheme",
                        content: "light dark"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "supported-color-schemes",
                        content: "light dark"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlFont */.sg, {
                name: "Inter",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlStyle */.GF, {
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
            /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlAttributes */.HT, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlAll */.QZ, {
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
    return /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSection */.Op, {
        padding: big ? "48px 0 40px" : "48px 0 24px",
        children: /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlColumn */.jM, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlImage */.By, {
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
    return /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSection */.Op, {
        cssClass: "smooth",
        children: /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlColumn */.jM, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlText */.HK, {
                cssClass: "footer",
                padding: "24px 24px 48px",
                fontSize: textSm,
                color: grayDark,
                children: [
                    "\xa9 2022 Mailing\xa0\xa0\xb7\xa0\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlButton */.uv, {
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
            /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlButton */.uv, {
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* Mjml */.ll, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head_default, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlBody */.yN, {
                width: 600,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_default, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSection */.Op, {
                        padding: "0 24px 0",
                        cssClass: "smooth",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlColumn */.jM, {
                            children: [
                                headline && /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlText */.HK, {
                                    padding: "24px 0 8px",
                                    fontSize: textLg,
                                    lineHeight: leadingTight,
                                    cssClass: "paragraph",
                                    children: headline
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlText */.HK, {
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
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlText */.HK, {
                                    cssClass: "paragraph",
                                    padding: "0",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: body
                                    })
                                }),
                                bulletedList && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSpacer */.qG, {
                                            height: "16px"
                                        }),
                                        bulletedList
                                    ]
                                }),
                                ctaText && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSpacer */.qG, {
                                            height: "24px"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary_default, {
                                            link: "#",
                                            uiText: ctaText
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSpacer */.qG, {
                                            height: "8px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlText */.HK, {
                                    padding: "16px 0",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: [
                                        "♥,",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Mailing"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
};
var TextEmail_default = TextEmail;
// emails/Welcome.jsx

// emails/components/BulletedList.jsx

var BulletedList = ({ items  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlText */.HK, {
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
var MyFirstEmail = ({ name  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* Mjml */.ll, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head_default, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlBody */.yN, {
                width: 600,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_default, {
                        big: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSection */.Op, {
                        padding: "0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlColumn */.jM, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlImage */.By, {
                                cssClass: "hero",
                                padding: "0 0 40px",
                                align: "left",
                                src: "https://s3.amazonaws.com/lab.campsh.com/welcome%402x.jpg"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSection */.Op, {
                        padding: "0 24px 0",
                        cssClass: "smooth",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlColumn */.jM, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlText */.HK, {
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
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlText */.HK, {
                                    padding: "24px 0 16px",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: "Mailing makes it easy to send great emails from your React app. Here’s a bit about Mailing in a nutshell:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(BulletedList_default, {
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
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSpacer */.qG, {
                                    height: "24px"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary_default, {
                                    link: "https://github.com/sofn-xyz/mailing",
                                    uiText: "View Github Repo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSpacer */.qG, {
                                    height: "24px"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlText */.HK, {
                                    cssClass: "paragraph",
                                    padding: "0",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    children: "Thank you for checking out our project. We’d love to hear your ideas on how we can make sending great emails more fun and simple."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlText */.HK, {
                                    padding: "16px 0 0",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: [
                                        "♥,",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Mailing"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
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

var AccountCreated = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* Mjml */.ll, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head_default, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlBody */.yN, {
                width: 600,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_default, {
                        big: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSection */.Op, {
                        padding: "0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlColumn */.jM, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlImage */.By, {
                                cssClass: "hero",
                                padding: "0 0 40px",
                                align: "left",
                                src: "https://s3.amazonaws.com/lab.campsh.com/welcome%402x.jpg"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSection */.Op, {
                        padding: "0 24px 0",
                        cssClass: "smooth",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(src/* MjmlColumn */.jM, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlText */.HK, {
                                    cssClass: "paragraph",
                                    padding: "0",
                                    fontSize: textXl,
                                    lineHeight: leadingTight,
                                    children: "Welcome, dear User!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlText */.HK, {
                                    padding: "24px 0 16px",
                                    fontSize: textBase,
                                    lineHeight: leadingRelaxed,
                                    cssClass: "paragraph",
                                    children: "Thank you to register and to confidence in us!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(BulletedList_default, {
                                    items: [
                                        "You will enjoy our service all a month",
                                        "Our service aims to be the best option in ensuring the timely reminder of the activities of interest to you.",
                                        "You might change your reminder when you want without a limit",
                                        "You enjoy of a basic plan with 2 reminders but you can upgrade at any time to have many more.",
                                        "You Are completely free to leave you feedback"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSpacer */.qG, {
                                    height: "24px"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPrimary_default, {
                                    link: "https://dashboard-react-e1xk226s7-carloseur24.vercel.app/#/kanban",
                                    uiText: "Go to App"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(src/* MjmlSpacer */.qG, {
                                    height: "24px"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
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
    return /*#__PURE__*/ jsx_runtime_.jsx(TextEmail_default, {
        name: "Amelita",
        body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "We’ve received your request to change your password. Use the link below to set up a new password for your account. This link is only usable once! If you need to, you can reinitiate the password process again ",
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
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
    return /*#__PURE__*/ jsx_runtime_.jsx(TextEmail_default, {
        name: "Amelita",
        body: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "We’ve received your request to delete your account and your account has been deleted. We’re sad to see you go! If you’ve changed your mind or did this on accident, just reply to this email and let us know."
        })
    });
}
function newSignIn() {
    return /*#__PURE__*/ jsx_runtime_.jsx(TextEmail_default, {
        headline: "New sign-in detected",
        name: "Amelita",
        body: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "We’ve received your request to delete your Mailing account. Your account has been deleted. If you changed your mind or did this on accident, reply to this email and let us know."
        }),
        bulletedList: /*#__PURE__*/ jsx_runtime_.jsx(BulletedList_default, {
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
    return /*#__PURE__*/ jsx_runtime_.jsx(Welcome_default, {
        name: "Amelita"
    });
}
// .mailing/src/moduleManifest.ts
var moduleManifest_previews = {
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
    previews: moduleManifest_previews
};
var moduleManifest_default = (/* unused pure expression or super */ null && (moduleManifest));


;// CONCATENATED MODULE: ./src/util/moduleManifestUtil.ts

function previewTree() {
    return Object.keys(moduleManifest_previews).map((previewName)=>{
        const m = moduleManifest_previews[previewName];
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
    const previewModule = moduleManifest_previews[name];
    return previewModule[functionName]();
}
function getConfig() {
    return config;
}


/***/ })

};
;