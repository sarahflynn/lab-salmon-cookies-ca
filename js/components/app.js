'use strict';

(function(module) {
    let html = module.html;

    let template = function() {
        return html`
            <header>
                <h1>Hello World!</h1>
            </header>
            <main>
            </main>
        `;
    };

    class App {
        render() {
            let dom = template();
            return dom;
            // let main = dom.querySelector('main');
            // main.appendChild(template);
        }
    }

    module.App = App;

})(window.module = window.module || {});