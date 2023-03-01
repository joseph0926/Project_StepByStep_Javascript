import { renderCurrPlayer } from "./user/CurrentTeam.js";
import { addPlayerHandler } from "./user/UserInput.js";
import { connectDragable } from "./UI/DragDrop.js";

const addPlayerForm = document.querySelector("form");
const currTeam = document.querySelector(".cu");
const faTeam = document.querySelector(".fa");

renderCurrPlayer();

// connectDragable()

addPlayerForm.addEventListener("submit", addPlayerHandler);
currTeam.addEventListener("click", connectDragable("curr-player"));
faTeam.addEventListener("click", connectDragable("fa-player"));
