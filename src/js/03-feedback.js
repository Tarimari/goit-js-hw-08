import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);

console.dir(form)

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

}
