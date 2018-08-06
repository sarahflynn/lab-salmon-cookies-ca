'use strict';

(function(module) {

    let html = module.html;

    let template = function(totals) {
        return html`
            <tfoot id="foot">
                <tr>
                    <td>Totals</td>
                    <td>${totals.hourTotals[0]}</td>
                    <td>${totals.hourTotals[1]}</td>
                    <td>${totals.hourTotals[2]}</td>
                    <td>${totals.hourTotals[3]}</td>
                    <td>${totals.hourTotals[4]}</td>
                    <td>${totals.hourTotals[5]}</td>
                    <td>${totals.hourTotals[6]}</td>
                    <td>${totals.hourTotals[7]}</td>
                    <td>${totals.hourTotals[8]}</td>
                    <td>${totals.hourTotals[9]}</td>
                    <td>${totals.hourTotals[10]}</td>
                    <td>${totals.hourTotals[11]}</td>
                    <td>${totals.hourTotals[12]}</td>
                    <td>${totals.hourTotals[13]}</td>
                    <td class="grand-total">${totals.grandTotal}</td>
                </tr>
            </tfoot>
        `;
    };

    function getTotals(stores) {
        
        let hourTotals = [];
        for(let i = 0; i < 14; i++) {
            let total = 0;
    
            for(let j = 0; j < stores.length; j++) {
                total += stores[j].macaronsPerHour[i];
            }
            hourTotals.push(total);
        }
    
        let grandTotal = calcTotal(hourTotals);
    
        function calcTotal(hourTotals) {
            let grandTotal = 0;
            for(let j = 0; j < 14; j++) {
                grandTotal += hourTotals[j];
            } 
            return grandTotal;
        }

        let allTotals = {
            hourTotals: hourTotals,
            grandTotal: grandTotal
        };

        return allTotals;
     
    }

    class Totals {
        constructor(props) {
            this.totals = getTotals(props.stores);
        }

        render() {
            let dom = template(this.totals);
            return dom;
        }
    }

    module.Totals = Totals;

})(window.module = window.module || {});