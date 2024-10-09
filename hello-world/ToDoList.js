const todoList = () => {
  all = [];
  const add = (todoTask) => {
    all.push(todoTask);
    console.log(all);
  };
  const markedAsComplete = (index) => {
    all[index].completed = true;
    console.log(all);
  };
  return { all, add, markedAsComplete };
};

const todos = todoList();

todos.add({
  title: "I need to go to gym",
  dueDate: "09-10-2024",
  completed: false,
});

todos.add({
  title: "Renew Insurance",
  dueDate: "12-10-2024",
  completed: false,
});

todos.markedAsComplete(1);
