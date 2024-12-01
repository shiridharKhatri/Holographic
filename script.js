let scrollPosition = 0;
let imgs = document.querySelectorAll(".imgs");
function animateImages(event) {
  const scrollDelta = event.deltaY || event.detail || event.wheelDelta;
  scrollPosition += scrollDelta * 0.6;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  scrollPositionAnimation(scrollPosition);
}
const scrollPositionAnimation = (position) => {
  if (scrollPosition > 20) {
    document.getElementById("scrollContainer").style.opacity = "0";
  } else {
    document.getElementById("scrollContainer").style.opacity = "1";
  }
  let textHead = document.getElementById("textHead");
  gsap.to(imgs[0], {
    x: scrollPosition * 5,
    y: scrollPosition * 5,
    ease: "power2.out",
  });
  gsap.to(imgs[1], { y: scrollPosition * 4, ease: "power2.out" });
  gsap.to(imgs[2], { x: -scrollPosition * 2, ease: "power2.out" });
  gsap.to(imgs[3], { x: -scrollPosition * 1, ease: "power2.out" });
  gsap.to(imgs[4], { y: scrollPosition * 1, ease: "power2.out" });
  gsap.to(imgs[5], { y: scrollPosition * 1.5, ease: "power2.out" });
  gsap.to(imgs[6], { y: scrollPosition * 2, ease: "power2.out" });
  gsap.to(imgs[7], { y: scrollPosition * 2.5, ease: "power2.out" });
  gsap.to(imgs[8], {
    y: scrollPosition * 2.9,
    x: -scrollPosition * 2.9,
    ease: "power2.out",
  });
  gsap.to(textHead, {
    rotate: scrollPosition,
    y: scrollPosition * 2,
    ease: "power2.out",
  });
};
window.addEventListener("wheel", animateImages);
