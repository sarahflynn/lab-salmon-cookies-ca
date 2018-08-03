'use strict';

(function(module){

    let html = module.html;

    let template = function() {
        return html`
            <section>
                <h2>Store Table</h2>
                <table>
                    <tr>
                        <td>Row!</td>
                    </tr>
                </table>
            </section>
        `;
    };

    class StoresTable {
        constructor(props) {
            this.stores = props.stores;
        }

        render() {
            let stores = this.stores;
            let dom = template();
            this.table = dom.querySelector('table');
            return dom;
        }
    }
    module.StoresTable = StoresTable;
})(window.module = window.module || {});