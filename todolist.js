const input = document.getElementById("input");
const addButton = document.getElementById("add");
const ul = document.getElementById("ul");


addButton.addEventListener("click", function() {
    const li = document.createElement("li"); 
    li.textContent = input.value; // Set textContent to the value of the input
    li.classList.add("list-element")


    // Create a button element
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    // Add a class to the remove button
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", () => {
        const toRemove = document.querySelector("li");
        if (toRemove) { // Check if an <li> element exists before attempting to remove
            ul.removeChild(toRemove);
        }
    });

    ul.appendChild(li);
    li.appendChild(removeButton);
    input.value = ""; // Clear the input field
});



// Optional: Allow pressing Enter to add a task
input.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addButton.click(); // Simulate a click on the add button
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".auto-type", {
        strings: ["Continue to work"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});