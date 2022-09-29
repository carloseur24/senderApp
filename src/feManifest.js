// mailing.config.json
var mailing_config_default = {
  typescript: false,
  emailsDir: "./emails",
  outDir: "./previews_html",
  anonymousId: "3e05b5e3-f0be-4dfa-a3f3-88da85886940"
};

// .mailing/src/feManifest.ts
var feManifest = { config: mailing_config_default };
var feManifest_default = feManifest;
export {
  mailing_config_default as config,
  feManifest_default as default
};
