import * as pages from './pages/index.js'

switch (document.body.id) {
  case "home":
    pages.homePage()
    break;
  case "nft":
    pages.nftPage()
    break;
}