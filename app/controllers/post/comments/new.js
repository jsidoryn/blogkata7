import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['post'],
  post: Ember.computed.alias('controllers.post.content'),
  actions: {
    newComment: function() {
      var controller = this;
      var newPost = this.store.createRecord('comment', {
        comment: this.get('comment'),
        post: this.get('post')
      });
      newPost.save().then(function(data) {
        controller.get('post.comments').pushObject(data)
        controller.set('comment', '')
      });
    }
  }
});
