const btn = document.getElementById("btn");
const mainPage = document.getElementById("main");
const info = document.getElementById("info");

const popUpWindow = setTimeout(() => {
  btn.disabled = "true";
  info.style.filter = "blur(4px)";
  mainPage.append(createPopUp());
}, 3000);

btn.addEventListener("click", () => {
  clearTimeout(popUpWindow);
});

function createPopUp() {
  return createElement(
    "div",
    { classNames: ["popUp"] },
    createElement("button", { listeners: { click: clearPopUp } }, "subscribe")
  );
}

function clearPopUp() {
  const popUp = document.querySelector(".popUp");
  popUp.remove();
  btn.disabled = "";
  info.style.filter = "";
}
