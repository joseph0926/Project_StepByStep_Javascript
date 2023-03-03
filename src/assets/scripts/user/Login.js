import API_KEY from "../../../../api-key.js";
import { hideModalHandler } from "../UI/Modal.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

let email;
let password;
let idToken;

export const submitHandler = async (event) => {
  event.preventDefault();
  console.log("messi");
  console.log(email);
  console.log(password);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      idToken = data.idToken;
    } else {
      throw new Error("로그인 실패");
    }
    localStorage.setItem("isLoggedIn", idToken);
    console.log(data);
    console.log(idToken);
    location.reload();
  } catch (error) {
    console.log(error.message);
  }
  hideModalHandler();
};

export const logoutHandler = () => {
  if (localStorage.getItem("isLoggedIn")) {
    localStorage.removeItem("isLoggedIn");
  }
  location.reload();
};

emailInput.addEventListener("change", (event) => {
  email = event.target.value;
});
passwordInput.addEventListener("change", (event) => {
  password = event.target.value;
});
