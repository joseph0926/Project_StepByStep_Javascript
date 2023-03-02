import API_KEY from "../../../../api-key";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

let email;
let password;

const submitHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: {
      email,
      password,
    },
  });
  const data = await response.json();
  const idToken = data.idToken;

  if (idToken !== null) {
  }
};

emailInput.addEventListener("change", (event) => {
  email = event.target.value;
});
passwordInput.addEventListener("change", (event) => {
  password = event.target.value;
});
