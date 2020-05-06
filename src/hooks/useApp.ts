import { useState } from 'react';

import { TodoItem } from '../types.d';

interface HookProps {
  todos: TodoItem[];
  addTodo(title: string): void;
  removeTodo(id: string): void;
}

export default function useApp(): HookProps {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  function addTodo(title: string) {
    setTodos((prevState) => [{ id: Date.now().toString(), title}, ...prevState])
  }

  function removeTodo(id: string) {
    setTodos((prevState) => prevState.filter((item) => item.id !== id))
  }

  return {
    todos,
    addTodo,
    removeTodo,
  }
}