'use strict';

exports.read = function(req, res) {
  res.json(users);
};

const users = ["Bob Teapot"];
