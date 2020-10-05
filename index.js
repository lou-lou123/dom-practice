// Buttons
// identify button
const button = document.querySelector('button');

// identify invisibility
const invisibleName = document.querySelector('invisible');

// identfiy what happens on click, name appears
button.onclick = () => {
    invisibleName.removeChild('invisible');
}



// Mouse Over
// target the light bulb
const lightBulb = document.querySelector('#light-bulb');
// add event listener for hovering over lightbulb
lightBulb.addEventListener('mouseenter', () => {
    lightBulb.src = 'images/light-bulb-on.png';
});
// lightbulb will turn on
lightBulb.addEventListener('mouseleave', () => {
    lightBulb.src = 'images/light-bulb-off.png';
});




// Toggle
target the button
const button = document.querySelector('#toggle-button');

// add an event listener for click
button.addEventListener('click', () => {
    const alertName = document.querySelector('#toggle');
    alertName.classList.remove('invisible');
});

// disable invisible in toggle class





// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
//target button, input, feedback.
const button = document.querySelector('button');
const input = document.querySelector('input');
const validFeedback = document.querySelector('.valid-feedback');
const invalidFeedback = document.querySelector('.invalid-feedback');
// add event listener
button.addEventListener = ('submit', (event) => {
// if statements for either more or less than 3
    event.preventDefault();
    if(input.value.length > 2) {
        length.classList.remove("invalidFeedback");
        length.classList.add("validFeedback");
        } else {
        length.classList.remove("validFeedback");
        length.classList.add("invalidFeedback");
        }
}


// Challenge: Lists

// Challenge: Lists (Part 2)
