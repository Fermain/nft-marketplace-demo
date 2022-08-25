import * as storage from "../storage/index.js"

export function setUsername() {
  const username = storage.loadFromStorage("username")
  if (username) {
    document.querySelectorAll(".username").forEach(element => element.innerText = username)
  } else {
    document.querySelectorAll(".username").forEach(element => element.innerText = "sign up")
  }
}

export function setAuthMenu() {
  if (storage.loadFromStorage("username")) {
    hideLogin()  
  } else {
    hideLogout()
  }
}

export function hideLogin() {
  document.querySelectorAll('.login').forEach(element => element.style.display = "none")
  document.querySelectorAll('.logout').forEach(element => element.style.display = "block")
}

export function hideLogout() {
  document.querySelectorAll('.login').forEach(element => element.style.display = "block")
  document.querySelectorAll('.logout').forEach(element => element.style.display = "none")
}

export function getUser(username) {
  const users = storage.loadFromStorage("users");
  return users.find(user => user.username === username);
}

export function getActiveUser() {
  const username = storage.loadFromStorage("username")
  return getUser(username)
}