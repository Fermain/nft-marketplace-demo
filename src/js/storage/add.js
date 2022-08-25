export function addToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
