import { testFunc as bFunc } from "./b.js";
import "../c.js";
export function testFunc() {
  setTimeout(() => {
    document.querySelector("#log").textContent = "我是 a.js 的testFunc";
    bFunc();
  }, 1000);
}
