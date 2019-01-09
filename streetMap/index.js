const tiles = [...Array(1000)].map(() => '<div>🎄</div>')
const container = `
  <div class='container'>${tiles.join('')}</div>
  `
export default function render() {
  const mapContainer = document.querySelector('#map');
  mapContainer.innerHTML = container;
}

