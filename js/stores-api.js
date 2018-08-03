'use strict';

(function(module){
    
    let stores = [{
        name: 'Pike Place Market',
        min: '23',
        max: '65',
        avg: '6.3',
    }];

    let storesApi = {
        load: function() {
            return stores;
        }
    };

    module.storesApi = storesApi;

})(window.module = window.module || {});