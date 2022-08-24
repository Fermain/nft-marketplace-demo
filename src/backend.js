const fs = require("fs");
const path = require("path");
const crypto = require("crypto")

const dirName = '/static';
const collectionMap = new Map()
const items = fs.readdirSync(path.join(process.cwd(), dirName))
const collections = []

function getImageMetaData(src) {
  const collectionName = src.split('- ').pop().replace(/\.[\w]+/, '')
  const dateTimeMatch = src.match(/DALL·E ([\d-]+) ([\d.]+) /)
  if (!dateTimeMatch) return
  const id = crypto.randomUUID()
  const [, date, time] = dateTimeMatch
  const createdDate = new Date(`${date}T${time.replaceAll('.', ':')}`)
  return {
    id,
    collectionName,
    src: `${dirName}/${src}`,
    url: `/nft/?id=${id}`,
    price: Math.floor( Math.random() * 1000 ),
    owner: null,
    onSale: Boolean(Math.floor( Math.random() * 2 )),
    createdDate
  }
}

items.forEach((uri) => {
  const src = decodeURI(uri)
  const item = getImageMetaData(src)
  if (!item) return
  let collection = collectionMap.get(item.collectionName)
  if (!collection) {
    collection = new Map();
    collectionMap.set(item.collectionName, collection)
  }
  collection.set(item.src, item)
})

collectionMap.forEach((collection, collectionName) => {
  collections.push({
    collectionName,
    items: Array.from(collection.entries()).map(i => i[1]),
  })
})

fs.writeFileSync(path.join(process.cwd(), '/data.json'), JSON.stringify(collections, null, 2))