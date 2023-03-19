document.addEventListener("DOMContentLoaded", function() {
    const tasks = document.querySelector("#tasks");
    const input = document.querySelector("#input-items");

    document.querySelector("#submit").addEventListener("click", function(e) {
        e.preventDefault();
        const taskText = input.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
        } else {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            taskDiv.appendChild(checkbox);

            const taskInput = document.createElement("input");
            taskInput.setAttribute("type", "text");
            taskInput.setAttribute("value", taskText);
            taskDiv.appendChild(taskInput);

            const editButton = document.createElement("input");
            editButton.setAttribute("type", "submit");
            editButton.setAttribute("value", "Edit");
            taskDiv.appendChild(editButton);

            const deleteButton = document.createElement("input");
            deleteButton.setAttribute("type", "submit");
            deleteButton.setAttribute("value", "Delete");
            taskDiv.appendChild(deleteButton);

            tasks.appendChild(taskDiv);

        }
    });
});