'use strict';

module.exports = function(app) {
    const userController = require('../controllers/userController');

    app.route('/users')
        .get(userController.read);
};
