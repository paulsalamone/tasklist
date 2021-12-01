window.addEventListener("load", () => {
  const form = document.querySelector("#add-task-form");
  const input = document.querySelector("#add-task-input");
  const listItem = document.querySelector("#current-box");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert(`\n\n\n****** PLEASE ADD A TASK OR IT WON'T WORK!!!! ******\n\n`);
    } else {
      console.log("Success");
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");
  });
});
