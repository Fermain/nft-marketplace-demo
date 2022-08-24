import { getNfts } from "./getNfts.js";

export async function getNft(id) {
  const nfts = await getNfts();
  return nfts.find(n => n.id === id)
}