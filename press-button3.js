import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `press-button3`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PressButton3 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'press-button3',
      },
    };
  }
}

window.customElements.define('press-button3', PressButton3);
