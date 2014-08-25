import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newPost: function() {
      var post = this.store.createRecord('post', {
        title: this.get('controller.title'),
        body: this.get('controller.body')
      });
      post.save();
    }
  }
});
