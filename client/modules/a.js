import { testFunc as bFunc } from "./b.js";
import { testFunc as cFunc } from "../c.js";
export function testFunc() {
  setTimeout(() => {
    document.querySelector("#log").textContent = "我是 a.js 的testFunc";

    bFunc();
    cFunc();
  }, 1000);
}
