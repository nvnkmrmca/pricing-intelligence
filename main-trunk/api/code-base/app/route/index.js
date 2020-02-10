'use strict';

module.exports = (app) => {
    require('./heartbeat')(app),
    require('./product')(app)
};