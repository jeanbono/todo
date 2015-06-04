import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo: function() {
      this.get('newValue');
      var newTodo = this.store.createRecord('todo', {title: this.get('newValue'), isCompleted: false});
      this.set('newValue', '');
    },
    editTodo: function(todo) {
      if (Ember.isEmpty(todo.get('title'))) {
        this.send('destroyTodo', todo);
      }
      else {
        todo.save();
      }
    },
    destroyTodo: function(todo) {
      debugger;
      todo.deleteRecord();
    }
  }
});
