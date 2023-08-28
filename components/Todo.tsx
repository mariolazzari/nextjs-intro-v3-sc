"use client";
import { completeTodo } from "@/utils/actions";
import { useTransition } from "react";
import ITodo from "@/types/ITodo";

interface TodoProps {
  todo: ITodo;
}

const Todo = ({ todo }: TodoProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`px-8 py-2 border border-black/25 cursor-pointer ${
        todo.completed ? "line-through text-black/30" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
