import DS from 'ember-data';

export default DS.Model.extend({
    comment: DS.attr(),
    post: DS.belongsTo('post', { async: true })
});
