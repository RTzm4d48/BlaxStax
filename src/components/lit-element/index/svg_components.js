import { LitElement, css, html } from '../lit.js';

//import {BaseElement} from '../general.js';

console.log("ESTAMOS EN COMONENTES SVG")

//export class foot_item extends LitElement {
    //static get properties() {
        //return{
            //altura: {type: String},
            //label: {type: String},
            //icon_color: {type: String},
            //href: {type: String},
            //item_class: {type: String}
        //};
    //}

    //createRenderRoot(){
        //return this;
    //}
    //constructor(){
        //super();
        //this.altura = '';
        //this.label = '';
        //this.icon_color = '';
        //this.href = '';
    //}
    
    //render() {
        //return html`
        //<a href="${this.href}">
            //<span class="${this.item_class}">
                //<svg viewBox="0 0 28 47">
                    //<rect x="1.15" y="0.71" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="7.82" y="7.28" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="1.15" y="13.85" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="7.82" y="20.42" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="21.18" y="20.42" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="1.15" y="26.99" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="14.5" y="13.85" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="14.5" y="26.99" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="7.82" y="33.57" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    //<rect x="1.15" y="40.14" width="6.57" height="6.57" fill="${this.icon_color}"/>
                //</svg>
            //</span>
            //${this.label}
        //</a>
        //`;
    //}
//};
//customElements.define('foot-item', foot_item);

// COMPONENTE PARA EL LOGO DE  BLAXSTAX

class logo_blaxstax extends LitElement {
    static get properties() {
        return{
            item_class: {type: String},
            color_logo: {type: String},
            altura: {type: String},
            item_text: {type: String},
        };
    }
    constructor(){
        super();
        this.item_class = '';
        this.color_logo = '';
        this.altura = '';
        this.item_text = '';
    }
    static get styles() {
        return css`
          .my_icon {
            display: flex;
          }
        `;
        }
        // createRenderRoot(){
        //     return this;
        // }
    render() {
        let color_1 = {
            s_color_1: '#76611d',
            s_color_2: '#745f1c',
            s_color_3: '#6c5818',
            s_color_4: '#604b13',
            s_color_5: '#4e3b0b',
            s_color_6: '#443106',
            s_color_7: '#f3d048',
            s_color_8: '#cf9822',
            s_color_9: '#ecc63f',
            s_color_10: '#b28a19',
            s_color_11: '#b28a19',
            s_color_12: '#ecc63f',
            dsn_1: '01',
            dsn_2: '02',
            dsn_3: '03',
        }
        let color_2 = {
            s_color_1: 'white',
            s_color_2: 'white',
            s_color_3: 'white',
            s_color_4: 'white',
            s_color_5: 'white',
            s_color_6: 'white',
            s_color_7: 'white',
            s_color_8: 'white',
            s_color_9: 'white',
            s_color_10: 'gray',
            s_color_11: 'gray',
            s_color_12: 'white',
            dsn_1: '04',
            dsn_2: '05',
            dsn_3: '06',
        }
        let only_logo = {
            width: '509',
            text: 'BlaxStax',
        }
        let logo_text = {
            width: '207',
            text: '',
        }

        let color = this.color_logo == 'c1'? color_1 : color_2;
        let text = this.item_text == 'true' ? only_logo : logo_text;
        return html`
        <span class="my_icon" style="height: ${this.altura};">
            <svg viewBox="0 0 ${text.width} 120">
                <defs>
                    <clipPath id="clip-path"></clipPath>
                    <linearGradient id="Degradado_sin_nombre_${color.dsn_1}" x1="94.83" y1="116.95" x2="108.83" y2="22.26" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="${color.s_color_1}" stop-opacity="0"/>
                        <stop offset="0.28" stop-color="${color.s_color_2}" stop-opacity="0.05"/>
                        <stop offset="0.5" stop-color="${color.s_color_3}" stop-opacity="0.2"/>
                        <stop offset="0.71" stop-color="${color.s_color_4}" stop-opacity="0.45"/>
                        <stop offset="0.91" stop-color="${color.s_color_5}" stop-opacity="0.8"/>
                        <stop offset="1" stop-color="${color.s_color_6}"/>
                    </linearGradient>
                    <linearGradient id="Degradado_sin_nombre_${color.dsn_2}" x1="102.85" y1="59.88" x2="2.8" y2="59.88" gradientUnits="userSpaceOnUse">
                        <stop offset="0.37" stop-color="${color.s_color_7}"/>
                        <stop offset="1" stop-color="${color.s_color_8}"/>
                    </linearGradient>
                    <linearGradient id="Degradado_sin_nombre_${color.dsn_3}" x1="102.85" y1="59.88" x2="2.8" y2="59.88" gradientUnits="userSpaceOnUse">
                        <stop offset="0.37" stop-color="${color.s_color_7}"/>
                        <stop offset="1" stop-color="${color.s_color_8}"/>
                    </linearGradient>
                </defs>
                <polygon id="SVGID" points="66.6 88.2 99.65 12.49 102.86 7.01 105.54 6.29 139.53 35.11 105.23 113.2 102.86 115.27 98.62 112.79 66.6 88.2" style="fill:${color.s_color_9}"/>
                <polygon points="66.55 88.17 99.6 12.45 102.8 6.98 105.49 6.26 139.47 35.08 105.18 113.17 102.8 115.23 98.57 112.75 66.55 88.17" style="opacity:0.53;fill:url(#Degradado_sin_nombre_${color.dsn_1})"/>
                <path id="SVGID-2" data-name="SVGID" d="M86.84,18.58S105.33,4.33,91,3.3,54.82.82,43.15,13.11l-26,25.82S1.73,53,2.86,61.55s12.3,18.91,12.3,18.91l33.26,33.47s2.89,3.3,5.47,3.2h49s-2.06.41-7.23-5.58L64.43,80.35S52.55,69,52.55,61.66c0,0-1.14-7,11.26-19.63S86.84,18.58,86.84,18.58Z" style="fill:url(#Degradado_sin_nombre_${color.dsn_2})"/>
                <path id="SVGID-3" data-name="SVGID" d="M181.82,91.77c2.12-2.22,15.34-14.1,21.23-24.84s-8.26-23.25-8.26-23.25L157.19,6.19a5.24,5.24,0,0,0-3.93-1.65H104s2.07-.52,5.89,3.82S137.25,34.7,148.3,47.09s5.79,18.7,3.62,22.62S119,104.11,119,104.11,104,116.2,116.9,118a83.28,83.28,0,0,0,21.75.57,61.86,61.86,0,0,0,18.49-5.06l2.79-1.65,3.2-2.38,10-9.29Z" style="fill:url(#Degradado_sin_nombre_${color.dsn_3})"/>
                <path d="M68.46,84.18l19.11-43.7s10.12-22.83,13.12-28.61,4.8-3.56,9.4,0l21.17,17.56L108.54,7s-4.24-5.88-7.23.52S68.46,84.18,68.46,84.18Z" style="fill:${color.s_color_10}"/>
                <path d="M71.45,87.27l24.38,24.28s4.34,5.37,7,5.47,6.62-11,6.62-11l18.8-45.24-19.11,43s-4.14,9.81-6.31,10-6.92-5-6.92-5Z" style="fill:${color.s_color_11}"/>
                <text transform="translate(224.65 83.95)" style=" font-size:70.19486999511719px;fill:${color.s_color_12};font-family:'utendo_semibold', Utendo;font-weight:600">${text.text}</text>
            </svg>
        </span>
        `;
    }
};
customElements.define('logo-blaxstax',logo_blaxstax);










// CLASE BASE DE TODOS LOS ICONOS
class BaseElement extends LitElement {
    static get properties() {
      return {
        size: { type: String },
      };
    }
  
    constructor() {
      super();
      this.size = '';
    }
  
    static get styles() {
      return css`
        .my_icon {
          display: flex;
        }
      `;
    }
  }






//NOTE: LOGO 1 Block_3 Experts
class Icon_bloxtree_1 extends BaseElement {
    render() {
      return html`
        <span class="my_icon" style="height: ${this.size};">
            <svg viewBox="0 0 54 54"><g id="Capa_5" data-name="Capa 5"><path d="M25.73,26V44.91c.35,2.88-2.31,5.88-5.42,6.23s-5.42-1.73-5.77-2.77a1.64,1.64,0,0,0-1.27-1.15s-1.27,0-2.88-1.85a6.57,6.57,0,0,1-1.26-4.65,1.57,1.57,0,0,0-.93-1.93C3.93,36.6,6,32.1,6,32.1c2.54,1.73,4.27,1.62,5.08,1.27s1.27-2-.92-2.19-2.77-1-2.77-1a5,5,0,0,1-.46-7.61c1.15-.93.92-1.85.46-3.23s1-5.66,4.61-5.54S16.85,16,17.31,17.1s0,2.77,1.27,2.89A1.25,1.25,0,0,0,20,18.83c-.11-6.92-7-7.73-7-7.73s-1-3.46,2.3-4.61,4,4.38,5.66,2.31-2.54-4.5-2.54-4.5a13.62,13.62,0,0,1,4.5-1.39,2.49,2.49,0,0,1,2.88,2.31v6.69c-3.46-2.19-5.19,1.5-2.65,1.73a2.69,2.69,0,0,1,2.65,2.43v9.8l.05.41,2.08.11.17-.47V19.64a2.7,2.7,0,0,1,2.66-2.42c2.53-.23.8-3.92-2.66-1.73V5.22a2.49,2.49,0,0,1,2.89-2.31,13.73,13.73,0,0,1,4.5,1.39s-4.16,2.42-2.54,4.5,2.31-3.46,5.65-2.31,2.31,4.61,2.31,4.61-6.92.81-7,7.73A1.26,1.26,0,0,0,35.19,20c1.27-.12.8-1.73,1.27-2.89s1.73-3.23,5.3-3.34,5.08,4.15,4.62,5.54-.7,2.3.46,3.23a5,5,0,0,1-.46,7.61s-.58.81-2.77,1-1.73,1.84-.92,2.19,2.53.46,5.07-1.27c0,0,2.08,4.5-2.19,6.69a1.56,1.56,0,0,0-.94,1.93,6.6,6.6,0,0,1-1.25,4.65c-1.62,1.85-2.89,1.85-2.89,1.85a1.64,1.64,0,0,0-1.27,1.15c-.34,1-2.65,3.11-5.76,2.77S27.69,47.79,28,44.91s1.85-4.62,3.69-5.31,2-1.27,1.62-2.08A1.53,1.53,0,0,0,31,37.06a24.85,24.85,0,0,0-3,2.08v-13L28,25.47h-2.2Zm1.09,23.42s2.77,4.27,7,4.16,6-2.08,7.5-4.16a7.83,7.83,0,0,0,4.15-2.76c1.39-2.08,1.62-6.12,1.62-6.12a6.72,6.72,0,0,0,3.57-5.31c.35-3.8-1.15-5.07-1.15-5.07s2-2.66,1.15-5.42a8.89,8.89,0,0,0-2.07-3.93,7.16,7.16,0,0,0-1.39-6.69c-2.65-3-3.92-2.65-3.92-2.65a6,6,0,0,0-3.46-7.16,19.11,19.11,0,0,0-8.42-4A4.35,4.35,0,0,0,27,2S24.74-.72,20.48.78a21.34,21.34,0,0,0-6.7,3.69S9.05,6,10.44,11.39c0,0-2.31.23-4.5,3.35A6.64,6.64,0,0,0,5,20.85a6.79,6.79,0,0,0-2.08,5.31c.35,3.12,1.27,4,1.27,4a8.4,8.4,0,0,0-1,6.23c.3,1.67,1.78,3.11,3.4,4.21a8.76,8.76,0,0,0,5.83,8.82,8,8,0,0,0,7.27,4.16A8.2,8.2,0,0,0,26.82,49.46Z" style="fill:#ecc63f"/><path d="M36.4,26.28a3.17,3.17,0,0,0,2,2c1.5.46,2.42.11,2.42,1.27s-.69,1.38-2.19,1.26A5.7,5.7,0,0,1,34,26.28s-3-.35-4.49-2.31,1.15-2.66,1.84-1.73A5,5,0,0,0,35.71,24c2-.23,4.49-2.31,4.49-4.85s2.43-1.84,2.43-.81S42.4,22.12,41,23.62,36.4,26.28,36.4,26.28Z" style="fill:#ecc63f"/><path d="M38.36,40a5.82,5.82,0,0,0-3.12,2.43c-1.27,2-2.3,5.42-.34,5.65s.92-1.61,1.84-3.35a5.07,5.07,0,0,1,4.39-2.88,1.4,1.4,0,0,0,1.5-1.73s-.12-1.27-1.85-.69a7.46,7.46,0,0,0-2.54-5.54c-2.77-2.65-6.46-2-6.23-.58s1,1.16,2.43,1.39S38.24,36.31,38.36,40Z" style="fill:#ecc63f"/><path d="M15.55,26.28a3.17,3.17,0,0,1-2,2c-1.5.46-2.42.11-2.42,1.27s.69,1.38,2.19,1.26A5.68,5.68,0,0,0,18,26.28s3-.35,4.5-2.31-1.15-2.66-1.84-1.73A5.07,5.07,0,0,1,16.24,24c-2-.23-4.5-2.31-4.5-4.85s-2.42-1.84-2.42-.81.23,3.81,1.62,5.31S15.55,26.28,15.55,26.28Z" style="fill:#ecc63f"/><path d="M16.7,39a5.77,5.77,0,0,1,3.12,2.42c1.27,2,2.31,5.42.35,5.65s-.93-1.61-1.85-3.34a5.07,5.07,0,0,0-4.38-2.89,1.39,1.39,0,0,1-1.5-1.73s.11-1.27,1.84-.69a7.47,7.47,0,0,1,2.54-5.54c2.77-2.65,6.46-2,6.23-.58s-1,1.16-2.42,1.39S16.82,35.27,16.7,39Z" style="fill:#ecc63f"/></g></svg>
        </span>`;
    }
}
customElements.define('icon-bloxtree_1', Icon_bloxtree_1);

// LOGO line Block_3 Experts
class Icon_bloxtree_line extends BaseElement {
    render() {
      return html`
        <span class="my_icon" style="height: ${this.size};">
            <svg viewBox="0 0 70 9"><title>web</title><g id="Capa_5" data-name="Capa 5"><polygon points="0.4 7.55 69.19 7.55 62.31 1.93 62.31 6.3 0.4 6.3 0.4 7.55" style="fill:#fdfeff;opacity:0.8"/></g></svg>
        </span>
      `;
    }
  }
customElements.define('icon-bloxtree_line', Icon_bloxtree_line);

// LOGO 2 Block_3 Experts
class Icon_bloxtree_2 extends BaseElement {
    render() {
      return html`
        <span class="my_icon" style="height: ${this.size};">
            <svg viewBox="0 0 54 54"><g id="Capa_5" data-name="Capa 5"><path d="M32.07,15.57a11.78,11.78,0,0,0-5.2-1.19A11.9,11.9,0,1,0,37.54,21l1.93-2A14.59,14.59,0,1,1,34,13.57Z" style="fill:#ecc63f"/><path d="M28.82,22.58a4.29,4.29,0,0,0-1.95-.48,4.21,4.21,0,1,0,3.66,2.15l8.8-8.88h3.73L51.32,7h-5.2V1.65L37.73,10v3.6Z" style="fill:#ecc63f"/><path d="M39.56,4.62a25.11,25.11,0,1,0,9,9l-2.07,1.75a22.41,22.41,0,1,1-9-8.88Z" style="fill:#ecc63f"/></g></svg>
        </span>
      `;
    }
  }
customElements.define('icon-bloxtree_2', Icon_bloxtree_2);

// LOGO 3 Block_3 Experts
class Icon_bloxtree_3 extends BaseElement {
    render() {
      return html`
        <span class="my_icon" style="height: ${this.size};">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><title>web</title><g id="Capa_5" data-name="Capa 5"><path d="M3.63,10.8V8.11A3.06,3.06,0,0,1,6.7,5H47.29a3.07,3.07,0,0,1,3.07,3.07V44.43a3.08,3.08,0,0,1-3.07,3.07H6.7a3.07,3.07,0,0,1-3.07-3.07V10.88l.12-.53,2.19.23v6.11H48.05V8.56a1.22,1.22,0,0,0-1.22-1.21H7.16A1.21,1.21,0,0,0,5.94,8.56v2.36l-2.31.35ZM48.05,44.33V19H5.94V44.33a.74.74,0,0,0,.74.74H47.31A.74.74,0,0,0,48.05,44.33Z" style="fill:#ecc63f"/><rect x="25.81" y="22.86" width="2.31" height="18.86" rx="1.15" transform="translate(42.84 71.25) rotate(-162.31)" style="fill:#ecc63f"/><path d="M21.62,37,14,33.41a1.13,1.13,0,0,1,0-2l7.6-3.56a1.13,1.13,0,0,1,1.52.56h0a1.14,1.14,0,0,1-.56,1.49l-5.35,2.48,5.37,2.58a1.13,1.13,0,0,1,.54,1.48h0A1.14,1.14,0,0,1,21.62,37Z" style="fill:#ecc63f"/><path d="M32.52,37l7.6-3.56a1.13,1.13,0,0,0,0-2l-7.6-3.56a1.14,1.14,0,0,0-1.52.56h0a1.14,1.14,0,0,0,.56,1.49l5.36,2.48-5.38,2.58A1.13,1.13,0,0,0,31,36.39h0A1.14,1.14,0,0,0,32.52,37Z" style="fill:#ecc63f"/></g></svg>
        </span>
      `;
    }
  }
customElements.define('icon-bloxtree_3', Icon_bloxtree_3);

// LOGO 4 Block_3 Experts
class Icon_bloxtree_4 extends BaseElement {
    render() {
      return html`
        <span class="my_icon" style="height: ${this.size};">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><title>web</title><g id="Capa_5" data-name="Capa 5"><path d="M19.77,19.15s-.48-5.45,13.41-6.89V8.91s-.77-5.26-15.32-5.26S3.12,9.1,3.12,9.1v5S4.36,19.35,19.77,19.15Z" style="fill:#ecc63f"/><path d="M3.12,17.05s1,4.69,16.65,4.69v7.85S4.17,30,3.12,24.32Z" style="fill:#ecc63f"/><path d="M3.12,27.58s1.53,5.07,16.65,4.79v7.75S4.27,40.6,3.12,35Z" style="fill:#ecc63f"/><path d="M21.88,24.42s.19,5.17,15.6,5.17c10.34,0,13.53-2.8,14.51-4.65V19.82s-1-5.45-13.55-5.45-16.56,3.16-16.56,4.78Z" style="fill:#ecc63f"/><path d="M21.88,27.58s2.11,4.88,14,4.88,14.83-3,16.17-4.88v7.18s.1,5.55-15.79,5.55c-10.44,0-13.56-3.18-14.48-5.36Z" style="fill:#ecc63f"/><path d="M21.88,38s2.11,4.89,14,4.89S50.69,39.93,52,38v7.18s.1,5.56-15.79,5.56c-10.44,0-13.56-3.18-14.48-5.37Z" style="fill:#ecc63f"/></g></svg>
        </span>
      `;
    }
  }
customElements.define('icon-bloxtree_4', Icon_bloxtree_4);

