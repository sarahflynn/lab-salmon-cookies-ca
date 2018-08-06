'use strict';

(function(module){
    
    let html = module.html;

    let template = function(store, storeTotal) {
        return html`
                <tr>
                    <td class="store-name">${store.name}</td>
                    <td>${store.macaronsPerHour[0]}</td>
                    <td>${store.macaronsPerHour[1]}</td>
                    <td>${store.macaronsPerHour[2]}</td>
                    <td>${store.macaronsPerHour[3]}</td>
                    <td>${store.macaronsPerHour[4]}</td>
                    <td>${store.macaronsPerHour[5]}</td>
                    <td>${store.macaronsPerHour[6]}</td>
                    <td>${store.macaronsPerHour[7]}</td>
                    <td>${store.macaronsPerHour[8]}</td>
                    <td>${store.macaronsPerHour[9]}</td>
                    <td>${store.macaronsPerHour[10]}</td>
                    <td>${store.macaronsPerHour[11]}</td>
                    <td>${store.macaronsPerHour[12]}</td>
                    <td>${store.macaronsPerHour[13]}</td>
                    <td class="store-totals">${storeTotal}</td>
                </tr>

        `;
    };

    class StoreRow {
        constructor(props) {
            this.store = props.store;
            let perHour = props.store.macaronsPerHour;
            this.storeTotals = perHour.reduce((a, b) => a + b);
        }

        render() {
            let dom = template(this.store, this.storeTotals);
            return dom;
        }
    }

    module.StoreRow = StoreRow;

})(window.module = window.module || {});


