import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="todo" className="border border-black" />
        <button
          type="submit"
          className="px-4 py-2 m-1 text-white rounded-md bg-sky-500"
        >
          create
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
