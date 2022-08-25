export function setFavicon(href){
  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.setAttribute('rel','shortcut icon');
  link.setAttribute('href', href);
  head.appendChild(link);
}