const formValidaton = ({formEmailSelector, formStatusSelector, formSendButton}) => {

    const validateEmail =  (email) => {
        let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    };

    const validate = () => {
        formStatusSelector.innerHTML = '';

        let email = formEmailSelector.value;

        if(email === '') {
            formStatusSelector.innerHTML = 'Пожалуйста, заполните поле'
        }

        if(validateEmail(email)) {
            formStatusSelector.innerHTML = 'Ваш E-mail успешно отправлен'
        }

        if(!validateEmail(email)) {
            formStatusSelector.innerHTML = 'Поле заполнено некорректно'
        }

    };

    formSendButton.addEventListener('click', (event) => {
        event.preventDefault();
        validate();
    })


};

export default  formValidaton;