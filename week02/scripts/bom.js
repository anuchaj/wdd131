const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

  // Check if the input is not blank
  if (input.value.trim() !== '') {

    // Create list item
    const li = document.createElement('li');

    // Create delete button
    const deleteButton = document.createElement('button');

    // Add chapter text
    li.textContent = input.value;

    // Add delete button symbol
    deleteButton.textContent = '❌';

    // Accessibility label
    deleteButton.setAttribute(
      'aria-label',
      `Remove ${input.value}`
    );

    // Add delete button to list item
    li.append(deleteButton);

    // Add list item to unordered list
    list.append(li);

    // Delete chapter when button is clicked
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Clear input field
    input.value = '';

    // Return focus to input field
    input.focus();

  } else {

    // Keep focus on input if blank
    input.focus();

  }

});