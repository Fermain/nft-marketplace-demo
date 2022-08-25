export async function getCollections() {
  const response = await fetch('/data.json');
  return await response.json()
}