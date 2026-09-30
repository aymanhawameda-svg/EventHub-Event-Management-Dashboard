const form = document.querySelector("#new-task-form");
const new_task_modal = document.querySelector("#new_task");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  new_task_modal.close();
});

const calendar = document.querySelector("#calendar");
const dateInput = document.querySelector("#date");

dateInput.addEventListener("click", () => {
  calendar.hidden = false;
});
calendar.addEventListener("change", (event) => {
  dateInput.value = event.target.value;
  calendar.hidden = true;
});
