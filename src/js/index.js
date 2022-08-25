import * as pages from './pages/index.js'
import { setLogoutListener, setLoginListener, setUsername, setAuthMenu } from './auth/index.js';

switch (document.body.id) {
  case "home":
    pages.homePage()
    break;
  case "nft":
    pages.nftPage()
    break;
}

setLogoutListener()
setLoginListener()
setUsername()
setAuthMenu()