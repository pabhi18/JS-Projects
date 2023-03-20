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
            checkbox.classList.add("checkbox");
            checkbox.setAttribute("type", "checkbox");
            taskDiv.appendChild(checkbox);

            const taskInput = document.createElement("input");
            taskInput.classList.add("taskInput");
            taskInput.setAttribute("type", "text");
            taskInput.setAttribute("value", taskText);
            taskInput.readOnly = true;
            taskDiv.appendChild(taskInput);

            const editButton = document.createElement("input");
            editButton.classList.add("editButton");
            editButton.setAttribute("type", "submit");
            editButton.setAttribute("value", "Edit");
            taskDiv.appendChild(editButton);

            const deleteButton = document.createElement("input");
            deleteButton.classList.add("deleteButton");
            deleteButton.setAttribute("type", "submit");
            deleteButton.setAttribute("value", "Delete");
            taskDiv.appendChild(deleteButton);

            tasks.appendChild(taskDiv);

            deleteButton.addEventListener("click", function(e){
                tasks.removeChild(taskDiv);
            })
            editButton.addEventListener("click", function(e){
                taskInput.readOnly = false;
                editButton.setAttribute("value", "Save");
                editButton.addEventListener("click", function(e){
                    taskInput.readOnly = true;
                    editButton.setAttribute("value", "Edit");
                })

            })

        }
    });
});