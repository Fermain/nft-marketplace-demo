import { getCollections } from "./getCollections.js";

export async function getCollection(collectionName) {
  const collections = await getCollections()
  return collections.find(collection => collection.collectionName === collectionName)
}