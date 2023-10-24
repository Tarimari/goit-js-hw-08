import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);

const dateInLS = JSON.parse(localStorage.getItem(`feedback-form-state`));
// const dateInLS = localStorage.getItem(`feedback-form-state`);
if (dateInLS)
{
    form.elements.email.value = dateInLS.email;
    form.elements.message.value = dateInLS.message;
    }
// {
// if (JSON.parse(dateInLS).email)
// { form.elements.email.value = JSON.parse(dateInLS).email };
// if (JSON.parse(dateInLS).message)
//     { form.elements.message.value = JSON.parse(dateInLS).message };
// }
// else
// {
//     localStorage.setItem(`feedback-form-state`, ``)
// }


form.addEventListener(`submit`, handlerSubmit);

form.addEventListener(`input`, throttle(handlerInput, 500));

function handlerInput(evt) {
    const text = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    localStorage.setItem(`feedback-form-state`, JSON.stringify(text))
}
function handlerSubmit(evt) {
    evt.preventDefault();
    console.log(localStorage.getItem(`feedback-form-state`));
    localStorage.clear();
    form.elements.email.value = ``;
    form.elements.message.value = ``;
    
}

