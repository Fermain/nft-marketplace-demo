import { nftThumbnail } from "../template/index.js"
import { getNfts } from "../api/index.js"

export async function homePage() {
  const row = document.querySelector('main > .row')
  const nfts = await getNfts();
  const thumbnails = nfts.map(nft => {
    const col = document.createElement('div');
    col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2", "mb-4")
    col.append(nftThumbnail(nft))
    return col
  });
  row.append(...thumbnails)
}