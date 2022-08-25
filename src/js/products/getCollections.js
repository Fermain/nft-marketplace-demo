export async function getCollections() {
  const response = await fetch('/data.json');

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(response.status)
  }
}
