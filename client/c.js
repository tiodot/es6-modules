export function testFunc() {
  setTimeout(() => {
    document.querySelector("#log").textContent = "我是 c.js 的testFunc";
  }, 4000);
}
