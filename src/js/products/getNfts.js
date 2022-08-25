import { getCollections } from "./getCollections.js";

export async function getNfts() {
  const collections = await getCollections()
  return collections.reduce(function(nfts, collection) {
    return [...nfts, ...collection.items]
  }, [])
}
