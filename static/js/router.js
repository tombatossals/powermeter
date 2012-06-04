// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/main'
], function ($, _, Backbone, MapView) {

  var AppRouter = Backbone.Router.extend({

    routes: {
      '*actions': 'defaultAction'
    },

    initialize: function(options) {
        //_.bindAll( this, "show", "filter");
    },

    defaultAction: function(event) {
        var mainView = new MapView( { el: "#mainapp" } );
    }

  });

  var initialize = function() {
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
      initialize: initialize
  }

});
