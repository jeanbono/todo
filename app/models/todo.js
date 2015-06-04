import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Ember',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Rails',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Ubuntu',
      isCompleted: true
    },
    {
      id: 4,
      title: 'De Rose',
      isCompleted: false
    }
  ]
});
