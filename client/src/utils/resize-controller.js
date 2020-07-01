class ResizeController {
  static getItemsCount = () => {
    // TODO: Fix selectors names or replace with id
    // const container = document.querySelector('#beer_list_container');
    const header = document.querySelector('#main_header');

    const containerWidth = window.innerWidth * 0.75;
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
