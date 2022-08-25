import { setUsername, setAuthMenu } from "./helpers.js";
import * as storage from "../storage/index.js"

export function login(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  storage.addToStorage("username", username);
  const users = storage.loadFromStorage("users") || [];

  if (!users.find(user => user.username === username)) {
    users.push({
      username,
      credit: 1000,
      wishlist: [],
      owned: []
    })
    storage.addToStorage("users", users)
  }

  setUsername();
  setAuthMenu();
}

export function setLoginListener() {
  const form = document.querySelector('form#login');
  form.addEventListener('submit', login);
}