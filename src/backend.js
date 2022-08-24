const fs = require("fs");
const path = require("path");
const crypto = require("crypto")

const collectionMap = new Map()
const items = fs.readdirSync(path.join(process.cwd(), '/nfts'))
const collections = []

function getImageMetaData(src) {
  const collectionName = src.split('- ').pop().replace(/\.[\w]+/, '')
  const dateTimeMatch = src.match(/DALL·E ([\d-]+) ([\d.]+) /)
  if (!dateTimeMatch) return
  const [, date, time] = dateTimeMatch
  const createdDate = new Date(`${date}T${time.replaceAll('.', ':')}`)
  return {
    id: crypto.randomUUID(),
    collectionName,
    src,
    price: 1,
    owner: null,
    onSale: false,
    createdDate
  }
}

items.forEach((uri, index) => {
  const src = decodeURI(uri)
  const item = getImageMetaData(src, index)
  if (!item) return
  let collection = collectionMap.get(item.src)
  if (!collection) {
    collection = new Map();
    collectionMap.set(item.collectionName, collection)
  }
  collection.set(collection.src, item)
})

collectionMap.forEach((collection, collectionName) => {
  collections.push({
    collectionName,
    items: Array.from(collection.entries()).map(i => i[1])
  })
})

fs.writeFileSync(path.join(process.cwd(), '/data.json'), JSON.stringify(collections, null, 2))