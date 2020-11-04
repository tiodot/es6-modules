export function testFunc() {
  setTimeout(() => {
    document.querySelector("#log").textContent = "我是 b.js 的testFunc";
  }, 2000);
}
