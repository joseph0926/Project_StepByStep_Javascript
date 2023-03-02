const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

export const showModaleHandler = (event) => {
  event.preventDefault();

  if (modal.className !== "modal visible") {
    modal.classList.add("visible");
    backdrop.classList.add("visible");
  } else {
    return;
  }
};

export const hideModalHandler = () => {
  if (modal.className === "modal visible") {
    modal.classList.remove("visible");
    backdrop.classList.remove("visible");
  } else {
    return;
  }
};
