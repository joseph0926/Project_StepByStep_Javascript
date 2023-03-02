export const connectDrag = (id) => {
  const selectedPlayer = document.querySelector(`.${id}`);
  selectedPlayer.addEventListener("dragstart", (event) => {
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
