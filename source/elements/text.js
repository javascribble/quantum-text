import html from '../templates/text.js';

const { Component, template, define } = quantum;

export class Text extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-text', Text);