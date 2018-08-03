'use strict';

(function(module){

    let html = module.html;
    let StoreRow = module.StoreRow;

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