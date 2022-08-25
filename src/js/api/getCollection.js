import { getCollections } from "./getCollections.js";

export async function getCollection(name) {
  const collections = await getCollections();
  return collections.find(collection => collection.collectionName === name)
}