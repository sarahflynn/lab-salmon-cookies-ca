'use strict';

(function(module){
    
    let stores = [{
        name: 'Pike Place Market',
        min: '23',
        max: '65',
        avg: '6.3',
    }, {
        name: 'SeaTac Airport',
        min: '3',
        max: '24',
        avg: '1.2',  
    }, {
        name: 'Seattle Center',
        min: '11',
        max: '38',
        avg: '3.7',   
    }, {
        name: 'Capitol Hill',
        min: '20',
        max: '38',
        avg: '2.3',   
    }, {
        name: 'Alki',
        min: '2',
        max: '16',
        avg: '4.6',  
    }];

    function customers(store){
        store.customers = [];
        for(let j = 0; j < 14; j++) {
            let min = Math.ceil(parseInt(store.min));
            let max = Math.floor(parseInt(store.max));
            let customersThisHour = Math.floor(Math.random() * (max - min)) + min;
            store.customers.push(customersThisHour);
            
        }
    }

    function macarons(store){
        store.macaronsPerHour = [];
        for(let j = 0; j < 14; j++) {
            let macaronsThisHour = Math.ceil((parseFloat(store.customers[j])) * (parseFloat(store.avg)));
            store.macaronsPerHour.push(macaronsThisHour);
        }
    }

    function generateMacaronsPerHour() {
        for(let i = 0; i < stores.length; i++) {
            customers(stores[i]);
        }

        for(let i = 0; i < stores.length; i++) {
            macarons(stores[i]);
        }
    }

    generateMacaronsPerHour();

    module.stores = stores;

    function addMacaronsPerHour(store) {
        customers(store);
        macarons(store);
    }
    
    function addStore(store) {
        addMacaronsPerHour(store);
        console.log('add store working');
        stores.push(store);
        console.log('add store push', stores);
    }

    module.addStore = addStore;
    console.log('module.stores', module.stores);


    let storesApi = {
        load: function() {
            return stores;
        }
    };

    module.storesApi = storesApi;

})(window.module = window.module || {});