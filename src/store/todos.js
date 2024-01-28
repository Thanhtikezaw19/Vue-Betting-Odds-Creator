import { createPinia } from 'pinia';

export const pinia = createPinia();

export const useTodosStore = pinia.createStore('todos', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
});
