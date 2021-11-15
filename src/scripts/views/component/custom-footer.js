/* eslint-disable no-underscore-dangle */
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <footer>
        <p>Copyright © 2021 - Restaurantku</p>
    </footer>
        `;
  }
}

customElements.define('custom-footer', CustomFooter);
