export function nftThumbnail(nft) {
  const card = document.createElement('a');
  card.classList.add('card', 'nft')
  card.id = nft.id;
  card.dataset.sale = nft.onSale;
  card.dataset.owner = nft.owner;
  card.dataset.price = nft.price;
  card.href = nft.url;
  const cardImg = new Image();
  cardImg.classList.add('card-img');
  cardImg.src = nft.src;
  card.append(cardImg)
  return card
}