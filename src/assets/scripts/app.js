import { renderCurrPlayer } from "./user/CurrentTeam.js";
import { addPlayerHandler } from "./user/UserInput.js";

const addPlayerForm = document.querySelector("form");

renderCurrPlayer();

addPlayerForm.addEventListener("submit", addPlayerHandler);
