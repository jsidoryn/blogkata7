import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['post'],
  post: Ember.computed.alias('controllers.post.model'),
  actions: {
    newComment: function() {
      var controller = this;
      var newComment = this.store.createRecord('comment', {
        comment: this.get('comment'),
        post: this.get('post')
      });
      newComment.save().then(function(data) {
        controller.get('post.comments').pushObject(data);
        controller.get('post').save();
        controller.set('comment', '')
      });
    }
  }
});
