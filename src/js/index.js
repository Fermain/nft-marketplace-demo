import * as store from "./products/index.js"

import * as storage from "./storage/index.js"

import * as templates from "./templates/index.js"

store.getNfts().then(function(nfts) {
  const output = nfts.map(templates.nftTemplate)
  const row = document.querySelector('.row')
  row.append(...output)
})