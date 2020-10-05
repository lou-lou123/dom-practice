const form = document.querySelector('#form-validate')
const button = document.querySelector('btn');
const input = document.querySelector('input');
const validFeedback = document.querySelector('.valid-feedback');
const invalidFeedback = document.querySelector('.invalid-feedback');
// add event listener
form.addEventListener('click',(event)=>{
    event.preventDefault();
    if(input.value.length > 2) {
        form.classList.remove("invalidFeedback");
        form.classList.add("validFeedback");
        } else {
        form.classList.remove("validFeedback");
        form.classList.add("invalidFeedback");
        }
});
