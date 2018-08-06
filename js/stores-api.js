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
    
    for(let i = 0; i < stores.length; i++) {
        stores[i] = createHourlyInfo(stores[i]);
    }

    let storesApi = {
        load: function() {
            return stores;
        },
        add: function(store) {
            stores.push(store);
        }
    };

    module.storesApi = storesApi;

})(window.module = window.module || {});

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createHourlyInfo(store){
    let customers = 0;
    let macaronsPerHour = 0;
    store['macaronsPerHour'] = [];
    for(let i = 0; i < 14; i++){
        customers = getRandomInteger(parseInt(store.min), parseInt(store.max));
        macaronsPerHour = customers * parseFloat(store.avg);
        store['macaronsPerHour'].push(Math.ceil(macaronsPerHour));
    }
    return store;
} 