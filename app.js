var Router = Backbone.Router.extend({
  routes: {
    "*all": "all"
  },
  all: function() {
    if(window.location.hash) {
      $('#content').load(window.location.hash.replace('#', ''));
    }
  }
});

var myRouter = new Router();

Backbone.history.start();
