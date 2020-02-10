"use strict";

const mongoose = require('mongoose');
const Product = require('../model/product');
const _res = require("../util/response");


// retrieve and return all records from the database.
exports.findAll = (req, res) => {
    let query = {
        isActive: true,
        website: req.body.website
    };
    if(req.body.productType === 'brand'){
        query.brand = req.body.type;
    }else{
        query.category = req.body.type;
    }
    Product.find(query).then(result => {
        return _res.success(res, result);
    }).catch(err => {
        return _res.error(res, err.message || 'Some error occurred while retrieving data.');
    });
};

// retrieve and return records by user.
exports.findAllWebsites = (req, res) => {
    Product.find({
        isActive: true
    }).distinct("website").then(result => {
        return _res.success(res, result);
    }).catch(err => {
        return _res.error(res, err.message || 'Some error occurred while retrieving data.');
    });
};

// retrieve and return records by user.
exports.findAllBrands = (req, res) => {
    Product.find({
        isActive: true,
        website: req.params.website
    }).distinct("brand").then(result => {
        return _res.success(res, result);
    }).catch(err => {
        return _res.error(res, err.message || 'Some error occurred while retrieving data.');
    });
};

// retrieve and return records by user.
exports.findAllCategories = (req, res) => {
    Product.find({
        isActive: true,
        website: req.params.website
    }).distinct("category").then(result => {
        return _res.success(res, result);
    }).catch(err => {
        return _res.error(res, err.message || 'Some error occurred while retrieving data.');
    });
};