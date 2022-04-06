const TaskData = [
  {
    id: "1",
    title: "Office Work",
    description: "Have to setup github",
    checked: false,
  },
  {
    id: "2",
    title: "Garden Work",
    description: "Have to Dirt",
    checked: false,
  },
  {
    id: "3",
    title: "Car repair Work",
    description: "Have to setup Battery",
    checked: false,
  },
];
TaskData.defaultProps = {
  checked: false,
};

export default TaskData;
