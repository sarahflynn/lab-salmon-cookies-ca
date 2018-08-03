'use strict';

(function(module){
    
    let html = module.html;

    let template = function(store) {
        return html`
            <h1 id="sales-title">Savor Salmon Macarons: Sales Data</h1>
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
                <tbody id="table-body">
                    <tr>
                        <td>${store.name}</td>
                    </tr>
                </tbody>
            </table>

        `;
    };

    

    class StoreRow {
        constructor(props) {
            this.store = props.store;
        }

        render() {
            let dom = template(this.store);
            return dom;
        }
    }

    module.StoreRow = StoreRow;

})(window.module = window.module || {});


{/* <td>${store.macaronsPerHour[0]}</td>
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
<td class="totals">${store.storeTotals}</td> */}