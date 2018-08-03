'use strict';

(function(module) {

    let html = module.html;


    let template = function(totals) {
        return html`
            <tfoot id="foot">
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td class="grand-total">test</td>
                </tr>
            </tfoot>
        `;
    };

    function getTotals(stores) {
        
    }

    class Totals {
        constructor(props) {
            this.totals = getTotals(props.stores);
            console.log(this.totals);
        }

        render() {
            let dom = template(this.totals);
            return dom;
        }
    }

    module.Totals = Totals;

    console.log('totals totals', Totals);

})(window.module = window.module || {});