import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editPost: function(post) {
      post.set('title', this.get('controller.title'));
      post.set('body', this.get('controller.body'));
      post.save();
    }
  }
});
