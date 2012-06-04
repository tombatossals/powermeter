// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
], function($, _, Backbone, Router){

  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };

});
