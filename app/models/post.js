import DS from 'ember-data';

var Post =  DS.Model.extend({
  title: DS.attr(),
  body: DS.attr()
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'foo',
      body: 'lorem ipsum'
    },
    {
      id: 2,
      title: 'bar',
      body: 'ipsum lorem ipsum'
    }
  ]
});

export default Post;
