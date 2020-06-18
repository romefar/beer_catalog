class ResizeController {
  static getItemsCount = () => {
    const container = document.querySelector('.BeerList-beerListContainer-0-2-8');
    const header = document.querySelector('.Header-header-0-2-5');

    const containerWidth = container.offsetWidth;
    const containerHeight = window.innerHeight -
                            header.offsetHeight;
    const cardWidth = 320;
    const cardHeight = 353;

    const elememtsInRow = Math.floor(containerWidth / cardWidth);
    let rowsCount = 0;
    let rowsHeight = 0;
    while (rowsHeight < containerHeight) {
      rowsHeight += cardHeight;
      rowsCount++;
    }
    const itemsCount = elememtsInRow * rowsCount;
    return itemsCount;
  }
}

export default ResizeController;
