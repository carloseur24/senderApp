var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// mailing.config.json
var mailing_config_default = {
  typescript: false,
  emailsDir: "./emails",
  outDir: "./previews_html",
  anonymousId: "3e05b5e3-f0be-4dfa-a3f3-88da85886940"
};

// emails/index.js
import nodemailer from "../../node_modules/nodemailer/lib/nodemailer.js";
import { buildSendMail } from "../../node_modules/mailing-core/dist/mailing-core.cjs.js";
var transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});
var sendMail = buildSendMail({
  transport,
  defaultFrom: "replace@me.with.your.com",
  configPath: "./mailing.config.json"
});
var emails_default = sendMail;

// emails/components/Head.jsx
import {
  MjmlHead,
  MjmlFont,
  MjmlAttributes,
  MjmlAll,
  MjmlStyle,
  MjmlRaw
} from "../../node_modules/mjml-react/dist/src/index.js";

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
var Head = ({ children }) => {
  return <MjmlHead>
    <MjmlRaw>
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
    </MjmlRaw>
    <MjmlFont name="Inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900" />
    <MjmlStyle>{`
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
      `}</MjmlStyle>
    <MjmlAttributes><MjmlAll font-family='Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' font-weight="400" /></MjmlAttributes>
    {children}
  </MjmlHead>;
};
var Head_default = Head;

// emails/components/Header.jsx
import { MjmlSection, MjmlColumn, MjmlImage } from "../../node_modules/mjml-react/dist/src/index.js";
var Header = ({ big }) => {
  return <MjmlSection padding={big ? "48px 0 40px" : "48px 0 24px"}><MjmlColumn><MjmlImage padding="0 24px 0" width={big ? "146px" : "91px"} height={big ? "32px" : "20px"} align="left" src="https://s3.amazonaws.com/lab.campsh.com/mailing-logo%402x.png" cssClass="logo" /></MjmlColumn></MjmlSection>;
};
var Header_default = Header;

// emails/components/Footer.jsx
import { MjmlSection as MjmlSection2, MjmlColumn as MjmlColumn2, MjmlText } from "../../node_modules/mjml-react/dist/src/index.js";
function Footer() {
  return <MjmlSection2 cssClass="smooth"><MjmlColumn2><MjmlText cssClass="footer" padding="24px 24px 48px" fontSize={textSm} color={grayDark}>
    {"\xA9 2022 Mailing\xA0\xA0\xB7\xA0\xA0"}
    <a href="#" target="_blank">Unsubscribe</a>
  </MjmlText></MjmlColumn2></MjmlSection2>;
}

// emails/components/ButtonPrimary.jsx
import { MjmlButton } from "../../node_modules/mjml-react/dist/src/index.js";
var ButtonPrimary = ({ link, uiText }) => {
  return <>
    <MjmlButton lineHeight={leadingTight} fontSize={textBase} height={52} padding="0" align="left" href={link} backgroundColor={black} borderRadius={borderBase} cssClass="light-mode">{uiText}</MjmlButton>
    <MjmlButton lineHeight={leadingTight} fontSize={textBase} height={52} padding="0" align="left" href={link} backgroundColor={grayLight} color={black} borderRadius={borderBase} cssClass="dark-mode">{uiText}</MjmlButton>
  </>;
};
var ButtonPrimary_default = ButtonPrimary;

// emails/TextEmail.jsx
import {
  Mjml,
  MjmlBody,
  MjmlSection as MjmlSection3,
  MjmlColumn as MjmlColumn3,
  MjmlText as MjmlText2,
  MjmlSpacer
} from "../../node_modules/mjml-react/dist/src/index.js";
var TextEmail = ({ name, headline, body, bulletedList, ctaText }) => {
  return <Mjml>
    <Head_default />
    <MjmlBody width={600}>
      <Header_default />
      <MjmlSection3 padding="0 24px 0" cssClass="smooth"><MjmlColumn3>
        {headline && <MjmlText2 padding="24px 0 8px" fontSize={textLg} lineHeight={leadingTight} cssClass="paragraph">{headline}</MjmlText2>}
        <MjmlText2 padding="16px 0 16px" fontSize={textBase} lineHeight={leadingRelaxed} cssClass="paragraph">
          {"Hello "}
          {name}
          {","}
        </MjmlText2>
        <MjmlText2 cssClass="paragraph" padding="0" fontSize={textBase} lineHeight={leadingRelaxed}><>{body}</></MjmlText2>
        {bulletedList && <>
          <MjmlSpacer height="16px" />
          {bulletedList}
        </>}
        {ctaText && <>
          <MjmlSpacer height="24px" />
          <ButtonPrimary_default link="#" uiText={ctaText} />
          <MjmlSpacer height="8px" />
        </>}
        <MjmlText2 padding="16px 0" fontSize={textBase} lineHeight={leadingRelaxed} cssClass="paragraph">
          {"\u2665,"}
          <br />
          {"Mailing"}
        </MjmlText2>
      </MjmlColumn3></MjmlSection3>
      <Footer />
    </MjmlBody>
  </Mjml>;
};
var TextEmail_default = TextEmail;

// emails/Welcome.jsx
import {
  Mjml as Mjml2,
  MjmlBody as MjmlBody2,
  MjmlSection as MjmlSection4,
  MjmlColumn as MjmlColumn4,
  MjmlText as MjmlText4,
  MjmlImage as MjmlImage2,
  MjmlSpacer as MjmlSpacer2
} from "../../node_modules/mjml-react/dist/src/index.js";

// emails/components/BulletedList.jsx
import { MjmlText as MjmlText3 } from "../../node_modules/mjml-react/dist/src/index.js";
var BulletedList = ({ items }) => {
  return <>{items.map((item) => <MjmlText3 padding="1px 0 0" fontSize={textBase} lineHeight={leadingRelaxed} cssClass="li" key={item}>
    {"\u2022\xA0\xA0"}
    {item}
  </MjmlText3>)}</>;
};
var BulletedList_default = BulletedList;

// emails/Welcome.jsx
var MyFirstEmail = ({ name }) => <Mjml2>
  <Head_default />
  <MjmlBody2 width={600}>
    <Header_default big />
    <MjmlSection4 padding="0"><MjmlColumn4><MjmlImage2 cssClass="hero" padding="0 0 40px" align="left" src="https://s3.amazonaws.com/lab.campsh.com/welcome%402x.jpg" /></MjmlColumn4></MjmlSection4>
    <MjmlSection4 padding="0 24px 0" cssClass="smooth"><MjmlColumn4>
      <MjmlText4 cssClass="paragraph" padding="0" fontSize={textXl} lineHeight={leadingTight}>
        {"Welcome, "}
        {name}
        {"!"}
      </MjmlText4>
      <MjmlText4 padding="24px 0 16px" fontSize={textBase} lineHeight={leadingRelaxed} cssClass="paragraph">{"Mailing makes it easy to send great emails from your React app. Here\u2019s a bit about Mailing in a nutshell:"}</MjmlText4>
      <BulletedList_default items={[
        "Email templates with React components",
        "MJML components that work across clients (Outlook!)",
        "Preview server for quick development",
        "Dev mode opens emails in your browser instead of sending",
        "Test mode for ensuring emails send and have the correct content",
        "Plays well with js frameworks like redwood.js, remix, next.js",
        "Written in Typescript, inspired by Action Mailer from Ruby on Rails"
      ]} />
      <MjmlSpacer2 height="24px" />
      <ButtonPrimary_default link="https://github.com/sofn-xyz/mailing" uiText="View Github Repo" />
      <MjmlSpacer2 height="24px" />
      <MjmlText4 cssClass="paragraph" padding="0" fontSize={textBase} lineHeight={leadingRelaxed}>{"Thank you for checking out our project. We\u2019d love to hear your ideas on how we can make sending great emails more fun and simple."}</MjmlText4>
      <MjmlText4 padding="16px 0 0" fontSize={textBase} lineHeight={leadingRelaxed} cssClass="paragraph">
        {"\u2665,"}
        <br />
        {"Mailing"}
      </MjmlText4>
    </MjmlColumn4></MjmlSection4>
    <Footer />
  </MjmlBody2>
</Mjml2>;
var Welcome_default = MyFirstEmail;

// emails/previews/AccountCreated.jsx
var AccountCreated_exports = {};
__export(AccountCreated_exports, {
  default: () => AccountCreated_default
});
import {
  Mjml as Mjml3,
  MjmlBody as MjmlBody3,
  MjmlSection as MjmlSection5,
  MjmlColumn as MjmlColumn5,
  MjmlText as MjmlText5,
  MjmlImage as MjmlImage3,
  MjmlSpacer as MjmlSpacer3
} from "../../node_modules/mjml-react/dist/src/index.js";
var AccountCreated = () => <Mjml3>
  <Head_default />
  <MjmlBody3 width={600}>
    <Header_default big />
    <MjmlSection5 padding="0"><MjmlColumn5><MjmlImage3 cssClass="hero" padding="0 0 40px" align="left" src="https://s3.amazonaws.com/lab.campsh.com/welcome%402x.jpg" /></MjmlColumn5></MjmlSection5>
    <MjmlSection5 padding="0 24px 0" cssClass="smooth"><MjmlColumn5>
      <MjmlText5 cssClass="paragraph" padding="0" fontSize={textXl} lineHeight={leadingTight}>Welcome, dear User!</MjmlText5>
      <MjmlText5 padding="24px 0 16px" fontSize={textBase} lineHeight={leadingRelaxed} cssClass="paragraph">Thank you to register and to confidence in us!</MjmlText5>
      <BulletedList_default items={[
        "You will enjoy our service all a month",
        "Our service aims to be the best option in ensuring the timely reminder of the activities of interest to you.",
        "You might change your reminder when you want without a limit",
        "You enjoy of a basic plan with 2 reminders but you can upgrade at any time to have many more.",
        "You Are completely free to leave you feedback"
      ]} />
      <MjmlSpacer3 height="24px" />
      <ButtonPrimary_default link="https://dashboard-react-e1xk226s7-carloseur24.vercel.app/#/kanban" uiText="Go to App" />
      <MjmlSpacer3 height="24px" />
    </MjmlColumn5></MjmlSection5>
    <Footer />
  </MjmlBody3>
</Mjml3>;
var AccountCreated_default = AccountCreated;

// emails/previews/TextEmail.jsx
var TextEmail_exports = {};
__export(TextEmail_exports, {
  accountDeleted: () => accountDeleted,
  newSignIn: () => newSignIn,
  resetPassword: () => resetPassword
});
function resetPassword() {
  return <TextEmail_default name="Amelita" body={<>
    {"We\u2019ve received your request to change your password. Use the link below to set up a new password for your account. This link is only usable once! If you need to, you can reinitiate the password process again "}
    <a href="#">here</a>
    {"."}
  </>} ctaText="Reset Password" />;
}
function accountDeleted() {
  return <TextEmail_default name="Amelita" body={<>{"We\u2019ve received your request to delete your account and your account has been deleted. We\u2019re sad to see you go! If you\u2019ve changed your mind or did this on accident, just reply to this email and let us know."}</>} />;
}
function newSignIn() {
  return <TextEmail_default headline="New sign-in detected" name="Amelita" body={<>{"We\u2019ve received your request to delete your Mailing account. Your account has been deleted. If you changed your mind or did this on accident, reply to this email and let us know."}</>} bulletedList={<BulletedList_default items={[
    "Date: July 14, 2022 4:26 PM PST",
    "Device: Mac",
    "Browser: Safari",
    "Location: Los Angeles, CA",
    "IP Address: XXX.XX.XXX.XX"
  ]} />} />;
}

// emails/previews/Welcome.jsx
var Welcome_exports = {};
__export(Welcome_exports, {
  toAmelita: () => toAmelita
});
function toAmelita() {
  return <Welcome_default name="Amelita" />;
}

// .mailing/src/moduleManifest.ts
var previews = { AccountCreated: AccountCreated_exports, TextEmail: TextEmail_exports, Welcome: Welcome_exports };
var templates = { TextEmail: TextEmail_default, Welcome: Welcome_default };
var moduleManifest = { sendMail: emails_default, templates, previews };
var moduleManifest_default = moduleManifest;
export {
  mailing_config_default as config,
  moduleManifest_default as default,
  previews,
  emails_default as sendMail,
  templates
};
