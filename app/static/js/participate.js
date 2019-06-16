document.addEventListener('DOMContentLoaded', () => {
    
    const formRegister = document.getElementById('form-register');

    $('#modal').modal({ show: false });

    formRegister.addEventListener('submit', e => {

        e.preventDefault();

        const request = {
            name: getValue('name'),
            lastname: getValue('lastname'),
            date_birdthay: getValue('date_birdthay'),
            dni: getValue('dni'),
            country: getValue('country'),
            email: getValue('email'),
            phone: getValue('phone'),
            team: getValue('team'),
            comments: getValue('comments')
        };

        if (!hasErrorsForm(request)) {
            registerUser(request)
                .then(() => $('#modal').modal('show'))
                .catch(() => alert('se produjo un error!!!'));
        }

    });

    formRegister.addEventListener('change', e => {
        const { id, value } = e.target;
        isValid(id, value) ? showError(id, false) : showError(id, true);
    });

});

const registerUser = async request => {
    const response = await fetch('/api/participants', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Token': '42e7a9400b81'
    },
    body: JSON.stringify(request)
  });
  await response.json();
}

const validations = {
    name: /^([a-z]|\.|\ ){3,}$/i,
    lastname: /^$|([a-z]|\.|\ ){3,}$/i,
    date_birdthay: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
    dni: /^[1-9][0-9]{7}$/,
    email: /[a-z|0-9]{3,8}@{1}[a-z|0-9]{1,8}\.(com|ar)$/i,
    country: /^$|[A-Za-z]/,
    phone: /^[0-9]{4}-[0-9]{4}$/,
    comments: /^$|([a-z | 0-9]|\.){3,}$/i,
    team: /^(red|green)$/
};

const getValue = name => {
    const element = document.getElementById(name);
    return element ? sanitizeHtml(element.value) : '';
};

const sanitizeHtml = value => {
    const regex = /<\s*script.*?>.*?(<\s*\/script.*?>|$)/ig;
    return value.replace(regex, '');
}

const showError = (id, show) => {
    const element = document.querySelector(`.${id}_error`);
    element.style.display = show ? 'block' : 'none';
};

const isValid = (name, value) => {
    const regex = validations[name];
    return regex.test(value);
}; 

const hasErrorsForm = request => {
    let error = false;
    Object.keys(request).forEach(name => {
        if (!isValid(name, request[name])) {
            showError(name, true);
            error = true;
        } else {
            showError(name, false);
        }
    });
    return error;
};