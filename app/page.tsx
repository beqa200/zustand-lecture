'use client';
import Image from 'next/image';
import useCountStore from '@/stores/countStore';
import Link from 'next/link';
import useTodoStore from '@/stores/todoStore';

export default function Home() {
  const todoStore = useTodoStore();
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todoStore.todoText}
        onChange={(e) =>
          todoStore.setTodoText(e.target.value)
        }
      />
      <button
        onClick={() =>
          todoStore.addTodo({
            id: Math.random(),
            text: todoStore.todoText,
          })
        }
      >
        add todo
      </button>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
