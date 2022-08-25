import { getNft } from "../api/index.js";
import { setFavicon } from "../helpers/favicon.js";

export async function nftPage() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  if (!id) {
    window.location.href = "/404";
  }
  const nft = await getNft(id);
  document.title = nft.collectionName
  setFavicon(nft.src);
  document.querySelectorAll('.collectionName').forEach(element => element.innerText = nft.collectionName)
  document.querySelectorAll('.nftImageSrc').forEach(element => element.src = nft.src)
  document.querySelectorAll('.nftImageHref').forEach(element => element.href = nft.src)
  document.querySelectorAll('.createdDate').forEach(element => element.innerText = (new Date(nft.createdDate)).toLocaleDateString())
  document.querySelectorAll('.createdTime').forEach(element => element.innerText = (new Date(nft.createdDate)).toLocaleTimeString())
  document.querySelectorAll('.price').forEach(element => element.innerText = nft.price)
  document.querySelectorAll('.id').forEach(element => element.innerText = nft.id.split("-")[0])

}