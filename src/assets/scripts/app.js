import { renderCurrPlayer } from "./user/CurrentPlayer.js";
import { addPlayerHandler } from "./user/FaPlayer.js";
import { connectDragable } from "./UI/DragDrop.js";
import { showModaleHandler, hideModalHandler } from "./UI/Modal.js";

const addPlayerForm = document.querySelector("form");
const currTeam = document.querySelector(".cu");
const faTeam = document.querySelector(".fa");
const login = document.querySelector(".auth");
const backdrop = document.querySelector(".backdrop");
const btn = document.querySelectorAll(".btn");

renderCurrPlayer();

addPlayerForm.addEventListener("submit", addPlayerHandler);
currTeam.addEventListener("click", connectDragable("curr-player"));
faTeam.addEventListener("click", connectDragable("fa-player"));
login.addEventListener("click", showModaleHandler);
backdrop.addEventListener("click", hideModalHandler);
btn.forEach((b) => {
  b.addEventListener("click", hideModalHandler);
});
