/* global createHourlyInfo */
'use strict';

(function(module){
    
    let html = module.html;
    
    let template = function() {
        return html`
        <h2>Add a New Store to the Table</h2>
            <form id="form">
                <p>
                    <label>Location name <br />
                        <input type="text" name="name"> 
                    </label>
                </p>
                <p>
                    <label> Minimum customers per hour <br />
                        <input type="number" name="min">
                    </label>
                </p>
                <p>
                    <label>Maximum customers per hour <br />
                        <input type="number" name="max">
                    </label>
                </p>
                <p>
                    <label>Average macarons per sale <br />
                        <input type="number" name="avg" step="any">
                    </label>
                </p>
                <p>
                    <button type="submit">Add</button>
                </p>
                
            </form>
        `;
    };

    class StoreForm {
        constructor(props) {
            this.onAdd = props.onAdd;
        }

        render() {
            let dom = template(this.store);

            let form = dom.querySelector('form');

            form.addEventListener('submit', (event) => {
                
                event.preventDefault();

                let elements = form.elements;

                let store = {
                    name: elements.name.value,
                    min: elements.min.value,
                    max: elements.max.value,
                    avg: elements.avg.value
                };

                store = createHourlyInfo(store);

                try {
                    this.onAdd(store);
                }
                catch(err) {
                    console.error(err.message);
                }

            });

            return dom;
        }
    }

    module.StoreForm = StoreForm;

})(window.module = window.module || {});