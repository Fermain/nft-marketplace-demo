export const save = (key, value) => {
  const sanitised = JSON.stringify(value);
  localStorage.setItem(key, sanitised)
}
