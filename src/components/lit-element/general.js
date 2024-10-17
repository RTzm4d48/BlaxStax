import { LitElement, css, html } from 'lit.js';

console.log("ESTAMOS EN General")

// CLASE BASE DE TODOS LOS ICONOS
export class BaseElement extends LitElement {
    static get properties() {
      return {
        item_size: { type: String },
      };
    }
  
    constructor() {
      super();
      this.item_size = '';
    }
  
    static get styles() {
      return css`
        .my_icon {
          display: flex;
        }
      `;
    }
  }
