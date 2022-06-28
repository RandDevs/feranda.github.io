const star = document.querySelectorAll("img")[0];
const moon = document.querySelectorAll("img")[1];
const mBehind = document.querySelectorAll("img")[2];
const mFront = document.querySelectorAll("img")[3];
const parallax = document.querySelector("section span");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  star.style.left = `${value * 0.25}px`;
  moon.style.top = `${value * 1.25}px`;
  moon.style.left = `${value * -0.5}px`;
  mBehind.style.top = `${value * 0.5}px`;
  mFront.style.top = `${value * 0}px`;
  parallax.style.marginLeft = `${-value * 4.5}px`;
  parallax.style.marginBottom = `${-value * 1.5}px`;
  // parallax.style.bottom = `${value * 4}px`;
});
