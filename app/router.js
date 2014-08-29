import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Blogkata7ENV.locationType
});

Router.map(function() {
  this.resource('posts', function() {
    this.route('edit', { path: '/:post_id/edit'});
    this.route('new');
    this.resource('post', { path: '/:post_id'}, function() {
      this.route('comments.new', { path: 'comment/new'});
    });
  });
});

export default Router;
