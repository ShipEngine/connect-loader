import "source-map-support/register";
import { loadApp } from "./load-app";

export * from "./load-app";

// The default export is an "IPaaS Loader" object, which has a `loadApp()` method
// tslint:disable-next-line: no-default-export
export default { loadApp };

// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports.default, module.exports);  // tslint:disable-line: no-unsafe-any
}
