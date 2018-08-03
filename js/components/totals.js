'use strict';

(function(module) {

    let html = module.html;


    let template = function(totals) {
        return html`
            <tfoot id="foot">
                <tr>
                    <td>Totals</td>
                    <td>${totals.storeTotals[0]}</td>
                    <td>${totals.storeTotals[1]}</td>
                    <td>${totals.storeTotals[2]}</td>
                    <td>${totals.storeTotals[3]}</td>
                    <td>${totals.storeTotals[4]}</td>
                    <td>${totals.storeTotals[5]}</td>
                    <td>${totals.storeTotals[6]}</td>
                    <td>${totals.storeTotals[7]}</td>
                    <td>${totals.storeTotals[8]}</td>
                    <td>${totals.storeTotals[9]}</td>
                    <td>${totals.storeTotals[10]}</td>
                    <td>${totals.storeTotals[11]}</td>
                    <td>${totals.storeTotals[12]}</td>
                    <td>${totals.storeTotals[13]}</td>
                    <td class="grand-total">${totals.grandTotal}</td>
                </tr>
            </tfoot>
        `;
    };

    function getTotals(stores) {
        
        let storeTotals = [];
        for(let i = 0; i < 14; i++) {
            let total = 0;
    
            for(let j = 0; j < stores.length; j++) {
                total += stores[j].macaronsPerHour[i];
            }
            storeTotals.push(total);
        }
        console.log('store totals', storeTotals);
    
        let grandTotal = calcTotal(storeTotals);
    
        function calcTotal(storeTotals) {
            let grandTotal = 0;
            for(let j = 0; j < 14; j++) {
                grandTotal += storeTotals[j];
            } 
            return grandTotal;
        }
        console.log('grandTotal', grandTotal);

        let allTotals = {
            storeTotals: storeTotals,
            grandTotal: grandTotal
        };

        return allTotals;

        // for(let i = 0; i < stores.length; i++) {
        //     stores[i].storeTotals = [];
        //     let storeTotal = calcTotal(stores[i].macaronsPerHour);
        //     stores[i].storeTotals.push(storeTotal);
        // }

     
    }

    class Totals {
        constructor(props) {
            this.totals = getTotals(props.stores);
            console.log('this.totals', this.totals);
        }

        render() {
            let dom = template(this.totals);
            return dom;
        }
    }

    module.Totals = Totals;

    console.log('totals totals', Totals);

})(window.module = window.module || {});