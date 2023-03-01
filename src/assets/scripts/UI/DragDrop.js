import { fetchDummyData } from "../fetch/DataFetch.js";

let DUMMY_DATA = [];

fetchDummyData().then((dummyData) => {
  // return DUMMY_DATA.push(dummyData);
  return (DUMMY_DATA = dummyData);
});

export const connectDrag = (id) => {
  const selectedCurrTeamPlayer = document.querySelector(`.${id}`);
  selectedCurrTeamPlayer.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", id);
    event.dataTransfer.effectAllowed = "move";
  });
};

export const connectDragable = (classes) => {
  const list = document.querySelector(`.${classes} ul`);
  list.addEventListener("dragenter", (event) => {
    if (event.dataTransfer.types[0] === "text/plain") {
      list.parentElement.classList.add("droppable");
      event.preventDefault();
    }
  });
  list.addEventListener("dragover", (event) => {
    if (event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
    }
  });
  list.addEventListener("dragleave", (event) => {
    if (event.relatedTarget.closest(`.${classes} ul`) !== list) {
      list.parentElement.classList.remove("droppable");
    }
  });
  list.addEventListener("drop", (event) => {
    const prjId = event.dataTransfer.getData("text/plain");
    const loadText = document.querySelector(".load");
    if (loadText) {
      loadText.innerHTML = "";
    }
    // console.log(prjId);
    // if (DUMMY_DATA.find((p) => p.id === prjId)) {
    //   return;
    // }
    console.log(prjId);
    const newEl = document.querySelector(`.${prjId}`);
    list.append(newEl);
    list.parentElement.classList.remove("droppable");
  });
};
