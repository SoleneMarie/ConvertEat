export const scroll = () => {
  const main = document.getElementById("main");
  const wrapper = document.getElementById("wrapper");
  const mainHeight = main.getBoundingClientRect().height;
  const limitScreenHeight = (window.innerHeight * 90) / 100;

  if (mainHeight >= limitScreenHeight) {
    if (wrapper.classList.value) {
      wrapper.classList.remove("center-align");
    }
  } else {
    if (!wrapper.classList.value) {
      wrapper.classList.add("center-align");
    }
  }
};
