// Get the buttons and replace button by their IDs
const buttons = document.querySelectorAll('.button');
const replaceButton = document.getElementById('replaceButton');

// Add click event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the selected button's text
        const selectedButton = button.textContent;

        // Store the selected button's text in a data attribute of the replace button
        replaceButton.dataset.selectedButton = selectedButton;
    });
});

// Add click event listener to the replace button
replaceButton.addEventListener('click', () => {
    // Get the section element
    const section = document.querySelector('section');

    // Clear the section's content
    section.innerHTML = '';

    // Create new elements
    const img = document.createElement('img');
    const span = document.createElement('span');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    // Set the content of the elements
    img.src = 'img/illustration-thank-you.svg';
    span.textContent = "You selected " + replaceButton.dataset.selectedButton + " out of 5";
    h2.textContent = 'Thank you!';
    p.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

    section.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4', 'px-7', 'pb-12');
    img.classList.add('mx-auto', 'mt-4', 'mb-8');
    span.classList.add('bg-[#313942]', 'text-[#FB7312]', 'py-1', 'font-normal', 'rounded-full', 'self-center', 'px-4', 'mb-4');
    h2.classList.add('text-center', 'font-semibold', 'text-2xl');
    p.classList.add('font-semibold', 'mb-8', 'text-[#959EAB]', 'text-pretty', 'text-sm', 'text-center')

    // Append the elements to the section
    section.appendChild(img);
    section.appendChild(span);
    section.appendChild(h2);
    section.appendChild(p);
});

// Check if any button is selected
const isButtonSelected = () => {
    const selectedButton = replaceButton.dataset.selectedButton;
    return selectedButton !== undefined && selectedButton !== null;
};

// Disable replace button if no button is selected
replaceButton.disabled = !isButtonSelected();

// Add event listener to buttons to enable/disable replace button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedButton = button.textContent;
        replaceButton.dataset.selectedButton = selectedButton;
        replaceButton.disabled = !isButtonSelected();
    });
});

// Add event listener to the div to disable replace button if no button is selected
const div = document.querySelector('div');
div.addEventListener('click', () => {
    replaceButton.disabled = !isButtonSelected();
});