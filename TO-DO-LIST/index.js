const form = document.querySelector('form');
let taskInput = document.getElementById('task');
let prioritySelect = document.getElementById('priority');
let tableBody = document.querySelector('table tbody');
let fav = 0; // Initialize fav variable

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let taskValue = taskInput.value;
  let priorityValue = prioritySelect.value;

  if (taskValue.trim() === '' || priorityValue === '') {
    alert('Please fill in all fields.');
    return;
  }

  let row = tableBody.insertRow();

  let taskCell = row.insertCell(0);
  let priorityCell = row.insertCell(1);
  let favoriteCell = row.insertCell(2);

  taskCell.textContent = taskValue;
  priorityCell.textContent = priorityValue;

  if (priorityValue === 'High') {
    row.classList.add('high-priority');
  } else if (priorityValue === 'Low') {
    row.classList.add('low-priority');
  }

  let favoriteButton = document.createElement('button');
  favoriteButton.textContent = 'Favourite';

  favoriteButton.addEventListener('click', function () {
    fav++; // Increment the fav variable
  });

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', function () {
    tableBody.removeChild(row);
  });

  favoriteCell.appendChild(favoriteButton);
  favoriteCell.appendChild(deleteButton); // Add the delete button to the same cell
  taskInput.value = '';
  prioritySelect.value = '';
});
