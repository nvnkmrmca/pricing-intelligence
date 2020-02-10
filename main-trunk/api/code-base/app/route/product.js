'use strict';

const _ctrl = require('../controller/product');
const route = '/product';

module.exports = (app) => {
    // Retrieve all websites
    app.get(route + '/websites', _ctrl.findAllWebsites);

    // Retrieve all brands
    app.get(route + '/brands/:website', _ctrl.findAllBrands);
    
    // Retrieve all categories
    app.get(route + '/categories/:website', _ctrl.findAllCategories);

    // Retrieve all products
    app.post(route + 's', _ctrl.findAll);

};