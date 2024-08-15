import exp from 'constants';
import { create } from 'zustand';

interface Todo {
  id: number;
  text: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  todoText: string;
  setTodoText: (text: string) => void;
}
const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter(
        (todo) => todo.id !== id,
      ),
    })),
  //////
  todoText: '',
  setTodoText: (text: string) =>
    set({ todoText: text }),
}));

export default useTodoStore;
