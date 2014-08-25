import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editPost: function() {
      var controller = this;
      this.get('model').save().then(function() {
        controller.transitionToRoute('posts');
      });
    }
  }
});
