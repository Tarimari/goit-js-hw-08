import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);

const dateInLS = localStorage.getItem(`feedback-form-state`);

form.elements.email.value = JSON.parse(dateInLS).email || ``;
form.elements.message.value = JSON.parse(dateInLS).message || ``;

form.addEventListener(`submit`, handlerSubmit);

form.addEventListener(`input`, throttle(handlerInput, 500, {
      leading: true,
      trailing: false,
    }));

function handlerInput(evt) {
    let text = {
        email: evt.currentTarget.elements.email.value,
        message: evt.currentTarget.elements.message.value,
    }
    localStorage.setItem(`feedback-form-state`, JSON.stringify(text))
    console.dir(evt.currentTarget.elements.email.value);
    console.dir(evt.currentTarget.elements.message.value);
};
function handlerSubmit(evt) {
    evt.preventDefault();
    console.log(dateInLS);
    localStorage.clear();
}

