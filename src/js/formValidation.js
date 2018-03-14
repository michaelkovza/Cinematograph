const formValidaton = ({formEmailSelector, formStatusSelector, formSendButton, formStatusSelectorHiddenClass}) => {

    if(!formEmailSelector) {
        return
    }

    const validateEmail =  (email) => {
        let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    };

    const validate = () => {

        formStatusSelector.innerHTML = '';

        let email = formEmailSelector.value;


        if(validateEmail(email)) {

            formSendButton.removeAttribute('disabled');

            formSendButton.addEventListener('click', (event) => {

                event.preventDefault();

                console.log(email);

                formStatusSelector.innerHTML = 'Вы добавлены в рассылку.';
                formStatusSelector.classList.remove(formStatusSelectorHiddenClass);
                formSendButton.setAttribute('disabled', true);

                // send form data on server

            });
        } else {
            formStatusSelector.innerHTML = 'Поле заполнено некорректно.';
            formStatusSelector.classList.remove(formStatusSelectorHiddenClass);
        }

        if(email === '') {
            formStatusSelector.innerHTML = 'Поле не может быть пустым.';
            formStatusSelector.classList.remove(formStatusSelectorHiddenClass);

            setTimeout(() => {
                formStatusSelector.innerHTML = '';
                formStatusSelector.classList.add(formStatusSelectorHiddenClass);
            }, 5000)
        }

    };

    formEmailSelector.addEventListener('input', () => {

        validate();
    });

    formEmailSelector.addEventListener('blur', () => {

        validate()
    })

};

export default formValidaton;