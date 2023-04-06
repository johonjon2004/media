const body = document.querySelector("body"),
  toggle = document.querySelector(".toggle");
const title = document.querySelector("h1");
const darkspan = document.querySelector("h6");
const desc = document.querySelector("p");
const list = document.querySelector(".hero__grid__item");
const list1 = document.querySelector(".overview__grid__item");
const text = document.querySelector(".text");
const span2 = document.querySelector("h5");
const title2 = document.querySelector("h2");
const yozuv = document.querySelector(".desc2");
const chiziq = document.querySelector(".today");

toggle.addEventListener("click", () => toggle.classList.toggle("active"));

let a = true;
toggle.addEventListener("click", () => {
  if (a) {
    body.style.background = "#fff";
    title.style.color = "#1D1F29";
    darkspan.textContent = "Light Mode";
    darkspan.style.color = "#848BAB";
    desc.style.color = "#63687D";
    list.style.background = "#F1F3FA";
    list1.style.background = "#F1F3FA";
    text.style.color = "#1D1F29";
    span2.style.color = "#63687D";
    title2.style.color = "#1D1F29";
    yozuv.style.color = "#63687D";
    chiziq.style.color = "#63687D";
  } else {
    title.style.color = "#fff";
    body.style.background = "#1D1F29";
    darkspan.textContent = "Dark Mode";
    darkspan.style.color = "#8C98C6";
    desc.style.color = "#8C98C6";
    list.style.background = "#252B42";
    list1.style.background = "#252B42";
    text.style.color = "#ffff";
    span2.style.color = "#8C98C6";
    title2.style.color = "#fff";
    yozuv.style.color = "#8C98C6";
    chiziq.style.color = "#fff";
  }
  a = !a;
});
