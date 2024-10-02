"use strict";

// We create two variables to select the button and ul tag.
const checkbtn = document.querySelector(".button");
const unorderlist = document.querySelector(".list");

// We add an event listener to the checkbtn.
checkbtn.addEventListener("click", () => {
  // We select the input element, get its value, and create an 'li' element to show tasks.
  const input = document.getElementById("input");
  const inputValue = input.value;
  const newListItem = document.createElement("li");

  // We set the text content of the 'li' element to the input value.
  newListItem.textContent = inputValue;
  // We append the 'li' element to the unordered list.
  unorderlist.appendChild(newListItem);
  // Clear the input field after adding the task.
  input.value = "";

  // We create a button element with the text 'حذف' for deleting tasks.
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "حذف";

  // We add an event listener to the delete button to remove the task.
  deleteButton.addEventListener("click", () => {
    unorderlist.removeChild(newListItem);
  });
  newListItem.appendChild(deleteButton);

  // We create a button element for marking tasks as completed.
  const completeButton = document.createElement("button");
  completeButton.textContent = "انجام شد";
  newListItem.appendChild(completeButton);

  // We add an event listener to the complete button to style completed tasks.
  completeButton.addEventListener("click", (e) => {
    e.target.parentElement.style.color = "gray";
    e.target.parentElement.style.textDecoration = "line-through";
  });
});
