import { registerApplication, start } from "single-spa";
import * as isActive from "./active-functions";
import "./index.scss";

registerApplication(
  "@demo1/nav-app",
  () => System.import("@demo1/nav-app"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@demo1/page1-app",
  () => System.import("@demo1/page1-app"),
  isActive.page1,
  { domElement: document.getElementById("page-1-container") }
);

registerApplication(
  "@demo1/page2-app",
  () => System.import("@demo1/page2-app"),
  isActive.page2,
  { domElement: document.getElementById("page-2-container") }
);

start();
