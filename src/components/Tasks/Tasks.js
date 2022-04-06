import Task from "./Task";

export default function Tasks({ taskList, handelDelete, handelCheck }) {
  if (!taskList || taskList.length === 0) {
    return <p>No Tasks</p>;
  }

  return (
    <div>
      {taskList.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          handelDelete={handelDelete}
          checked={task.checked}
          handelCheck={handelCheck}
        />
      ))}
    </div>
  );
}
