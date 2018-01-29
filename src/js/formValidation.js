const formValidaton = ({formEmailSelector, formStatusSelector, formSendButton}) => {

    const validateEmail =  (email) => {
        let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    };

    const validate = () => {
        formStatusSelector.innerHTML = '';

        let email = formEmailSelector.value;

        console.log(email + 1);



        if(validateEmail(email)) {
            formStatusSelector.innerHTML = 'Ваш E-mail успешно отправлен'
        } else {
            formStatusSelector.innerHTML = 'Поле заполнено некорректно'
        }

        if(email === '') {
            formStatusSelector.innerHTML = 'Заполните поле'
        }



    };

    formSendButton.addEventListener('click', (event) => {
        event.preventDefault();
        validate();
    });

    formEmailSelector.addEventListener('change', () => {
       
        validate();
    });

    formEmailSelector.addEventListener('blur', () => {

        validate()
    })

};

export default  formValidaton;