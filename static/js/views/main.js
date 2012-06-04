define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main.html'
], function($, _, Backbone, templateMain) {

  var MainView = Backbone.View.extend({
    	tagName: "div",
        className: "main",
        template: _.template(templateMain),

  	    initialize: function(options) {
		    //_.bindAll( this, "click" );
            this.render();
	    },	

        render: function() {
            $(this.el).html(this.template());
	    }
  });

  return MainView;
});
