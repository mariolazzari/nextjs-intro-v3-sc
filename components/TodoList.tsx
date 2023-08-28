import Todo from "./Todo";
import ITodo from "@/types/ITodo";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
