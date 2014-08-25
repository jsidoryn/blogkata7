import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  },
  actions: {
    deletePost: function(post) {
      post.deleteRecord();
      post.save();
    },
    newPost: function(post) {
      var route = this;
      var post = this.store.createRecord('post', {
        title: post.title,
        body: post.body
      });
      post.save().then(function() {
        route.transitionTo('posts');
      });
    }
  }
});
