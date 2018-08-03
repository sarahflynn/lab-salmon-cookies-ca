'use strict';

(function(module){

    let html = module.html;
    let StoreRow = module.StoreRow;

    let template = function() {
        return html`
            <section>
                <h2>Store Table</h2>
                <table>
                
                </table>
            </section>
        `;
    };

    class StoresTable {
        constructor(props) {
            this.stores = props.stores;
        }

        updateStore(store) {
            let storeRow = new StoreRow ({
                store: store
            });
            this.table.appendChild(storeRow.render());
        }
        

        render() {
            let stores = this.stores;
            let dom = template();
            this.table = dom.querySelector('table');

            for(let i = 0; i < stores.length; i++) {
                this.updateStore(stores[i]);
            }

            return dom;
        }
    }
    module.StoresTable = StoresTable;
})(window.module = window.module || {});