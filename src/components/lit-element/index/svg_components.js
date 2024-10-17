import { LitElement, css, html } from '../lit.js';
console.log("ESTAMOS EN COMONENTES SVG")

export class foot_item extends LitElement {
    static get properties() {
        return{
            altura: {type: String},
            label: {type: String},
            icon_color: {type: String},
            href: {type: String},
            item_class: {type: String}
        };
    }

    createRenderRoot(){
        return this;
    }
    constructor(){
        super();
        this.altura = '';
        this.label = '';
        this.icon_color = '';
        this.href = '';
    }
    
    render() {
        return html`
        <a href="${this.href}">
            <span class="${this.item_class}">
                <svg viewBox="0 0 28 47">
                    <rect x="1.15" y="0.71" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="7.82" y="7.28" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="1.15" y="13.85" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="7.82" y="20.42" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="21.18" y="20.42" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="1.15" y="26.99" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="14.5" y="13.85" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="14.5" y="26.99" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="7.82" y="33.57" width="6.57" height="6.57" fill="${this.icon_color}"/>
                    <rect x="1.15" y="40.14" width="6.57" height="6.57" fill="${this.icon_color}"/>
                </svg>
            </span>
            ${this.label}
        </a>
        `;
    }
};
customElements.define('foot-item', foot_item);

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

