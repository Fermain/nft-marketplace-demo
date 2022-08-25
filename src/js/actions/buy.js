import { getUser } from "../auth";

export function buyNft(id, price, username) {
  const user = getUser(username);
  user.credit = user.credit - price;
  user.owned = [...user.owned, id];
}