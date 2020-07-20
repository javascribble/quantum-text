import { Component, template } from '../../references/quantum.js';
import html from '../templates/text.js';

export class Text extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-text', Text);