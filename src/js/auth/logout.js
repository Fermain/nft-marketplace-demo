import { setAuthMenu, setUsername } from "./helpers.js"

export function logout() {
  localStorage.removeItem("username");
  setUsername()
  setAuthMenu()
}

export function setLogoutListener() {
  const button = document.querySelector('.logout');
  button.addEventListener('click', logout);
}