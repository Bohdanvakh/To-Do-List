// task list by myself

window.addEventListener("load", () => {

    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const list_el = document.getElementById("tasks");
    const taskTitle = document.getElementById("new-title-input");

    const timetracker = document.querySelector(".timetracker");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if(!task) {
            alert("please fil up the field");
            return;
        }

        const title = taskTitle.value;
        if(!title) {
            alert("your title is empty");
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add("task");

        const task_content_el = document.createElement('div');
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_title = document.createElement("input");
        task_title.classList.add("title");
        task_title.type = "text";
        task_title.value = title;
        task_title.setAttribute("readonly", "readonly");

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_title);
        task_content_el.appendChild(task_input_el);

        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "edit";

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "delete"

        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_delete);

        task_el.appendChild(task_actions);

        list_el.appendChild(task_el);

        input.value = "";
        taskTitle.value = "";

        task_edit.addEventListener("click", () => {
            if (task_edit.innerText.toLowerCase() == 'edit') {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_title.removeAttribute("readonly");
                task_title.focus();
                task_edit.innerText = 'save';
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit.innerText = 'edit';
                task_title.setAttribute("readonly", "readonly");
            };
        });
        task_delete.addEventListener("click", () => {
            list_el.removeChild(task_el);
        });
    });
});