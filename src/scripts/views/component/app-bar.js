/* eslint-disable no-underscore-dangle */
class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
  <header class="app-bar">
    <div class="app-bar_menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="app-bar_brand">
      <h1>Restaurantku</h1>
    </div>
    <nav id="navigationDrawer" class="app-bar_navigation">
      <ul>
        <li><a href="#/home">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://github.com/taufikrmdhan" target="blank">About Us</a></li>
      </ul>
    </nav>
  </header>
  <div class="resto">
    <div class="resto_inner">
      <h1 class="resto_title">Restaurantku</h1>
      <p class="resto_tagline">Website restaurantku akan menampilkan beberapa list restaurant terkenal dan mantappu jiwa
      </p>
    </div>
  </div>
      `;
  }
}

customElements.define('app-bar', AppBar);
