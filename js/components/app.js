'use strict';

(function(module) {
    let html = module.html;
    let storesApi = module.storesApi;
    let StoresTable = module.StoresTable;

    let template = function() {
        return html`
            <header>
                <h1>Savor Salmon Macarons: Sales Data</h1>
            </header>
            <main>
            </main>
        `;
    };

    class App {
        render() {
            let dom = template();
            let main = dom.querySelector('main');
            let stores = storesApi.load();
            let storesTable = new StoresTable ({
                stores: stores
            });
            console.log(stores);
            main.appendChild(storesTable.render());
            return dom;
        }
    }

    

    module.App = App;

})(window.module = window.module || {});