import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['completed'],
  completed: function() {
    return this.get('todo.isCompleted');
  }.property('todo.isCompleted'),
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);
      this.sendAction('edit', this.get('todo'));
    },
    destroyTodo: function() {
      this.sendAction('destroy', this.get('todo'));
    }
  }
});
