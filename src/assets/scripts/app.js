import { renderCurrPlayer } from "./user/CurrentPlayer.js";
import { addPlayerHandler } from "./user/FaPlayer.js";
import { connectDragable } from "./UI/DragDrop.js";
import { showModaleHandler, hideModalHandler } from "./UI/Modal.js";
import { submitHandler, logoutHandler } from "./user/Login.js";

const addPlayerForm = document.querySelector("form");
const currTeam = document.querySelector(".cu");
const faTeam = document.querySelector(".fa");
const login = document.querySelector(".in");
const logout = document.querySelector(".out");
const loginNav = document.querySelector(".login");
const logoutNav = document.querySelector(".logout");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".btn--passive");
const form = document.querySelector("form");

if (localStorage.getItem("isLoggedIn")) {
  logoutNav.classList.add("active");
  loginNav.classList.add("active");
} else {
  logoutNav.classList.remove("active");
  loginNav.classList.remove("active");
}

renderCurrPlayer();

addPlayerForm.addEventListener("submit", addPlayerHandler);
currTeam.addEventListener("click", connectDragable("curr-player"));
faTeam.addEventListener("click", connectDragable("fa-player"));
login.addEventListener("click", showModaleHandler);
logout.addEventListener("click", logoutHandler);
backdrop.addEventListener("click", hideModalHandler);
closeBtn.addEventListener("click", hideModalHandler);
form.addEventListener("submit", submitHandler);
