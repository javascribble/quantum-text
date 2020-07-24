import html from '../templates/text.js';

export class Text extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-text', Text);