import { getCollections } from "./getCollections.js";

export async function getNfts() {
  const collections = await getCollections()
  return collections.reduce((acc, curr) => {
    return [...acc, ...curr.items]
  }, [])
}