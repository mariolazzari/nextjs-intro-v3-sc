import NewTodoForm from "@/components/NewTodoForm";
import ILayoutProps from "@/types/ILayoutProps";

const DashboardLayout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
