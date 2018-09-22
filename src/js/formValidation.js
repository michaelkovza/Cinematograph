const formValidaton = ({formEmailSelector, formStatusSelector, formSendButton, formStatusSelectorHiddenClass}) => {
    let url = window.location.origin;

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

                formStatusSelector.classList.remove(formStatusSelectorHiddenClass);
                formSendButton.setAttribute('disabled', true);

                let data = new FormData();
                data.append("email", email);

                let xhr = new XMLHttpRequest();
                let sendEmailUrl = `${url}/api/subscribe`;

                xhr.open("POST",sendEmailUrl);

                xhr.onreadystatechange = function () {
                  if(xhr.readyState === XMLHttpRequest.DONE) {
                      let result = xhr.responseText;
                      result.status === 'ok'
                          ?
                          formStatusSelector.innerHTML = 'Вы добавлены в рассылку.'
                          :
                          formStatusSelector.innerHTML = result.msg
                  }
                };

                xhr.send(data);
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