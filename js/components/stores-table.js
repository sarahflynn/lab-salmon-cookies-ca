'use strict';

(function(module){

    let html = module.html;
    let StoreRow = module.StoreRow;
    let Totals = module.Totals;

    let template = function() {
        return html`
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Locations</th>
                            <th>6am</th>
                            <th>7am</th>
                            <th>8am</th>
                            <th>9am</th>
                            <th>10am</th>
                            <th>11am</th>
                            <th>12pm</th>
                            <th>1pm</th>
                            <th>2pm</th>
                            <th>3pm</th>
                            <th>4pm</th>
                            <th>5pm</th>
                            <th>6pm</th>
                            <th>7pm</th>
                            <th class="totals">Location Totals</th>
                        </tr>
                    </thead>
                </table>
            </section>
            <tbody id="table-body">
        `;
    };

    class StoresTable {
        constructor(props) {
            this.stores = props.stores;
            this.lastStores = this.stores.slice();
        }
        
        update(props) {
            let stores = [props.stores];
            let lastStores = this.lastStores;

            for(let i = 0; i < stores.length; i++) {
                
                let store = stores[i];
                if(lastStores.includes(store)) continue;

                this.updateStore(store);

                this.updateTotals(this.stores);
            }

            this.lastStores = stores.slice();
        }

        updateStore(store) {
            let storeRow = new StoreRow ({
                store: store
            });
            this.table.appendChild(storeRow.render());
        }

        updateTotals(stores) {
            let totals = new Totals ({
                stores: stores
            });

            if(this.table.querySelector('tfoot') !== null) {
                this.table.querySelector('tfoot').remove();
            }

            this.table.appendChild(totals.render());
        }

        render() {
            let stores = this.stores;
            let dom = template();
            this.table = dom.querySelector('table');

            for(let i = 0; i < stores.length; i++) {
                this.updateStore(stores[i]);
            }

            this.updateTotals(stores);

            return dom;
        }
    }

    module.StoresTable = StoresTable;
    
})(window.module = window.module || {});