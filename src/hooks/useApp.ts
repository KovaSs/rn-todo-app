import { useState } from 'react';

interface TodoItem {
  id: string;
  title: string;
}

interface HookProps {
  todos: TodoItem[];
  addTodo(title: string): void;
}

export default function useApp(): HookProps {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  function addTodo(title: string) {
    setTodos((prevState) => [{ id: Date.now().toString(), title}, ...prevState])
  }

  return {
    todos,
    addTodo
  }
}