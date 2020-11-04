import { Component, template, define } from '../import.js';

import html from '../templates/text.js';

export class Text extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-text', Text);