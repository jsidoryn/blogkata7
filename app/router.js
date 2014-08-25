import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Blogkata7ENV.locationType
});

Router.map(function() {
  this.resource('posts', function() {
    this.resource('post', { path: '/:post_id'}, function() {
      this.route('comments.new', { path: 'comment/new'});
    });
    this.route('edit', { path: '/:post_id/edit'});
    this.route('new');
  });
});

export default Router;
