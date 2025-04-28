const form = document.querySelector('.login-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.elements.email.value === '' || e.target.elements.password.value === '') {
        alert('All form fields must be filled in');
    } else {
        const data = {
            email: e.target.elements.email.value.trim(),
            password: e.target.elements.password.value.trim(),
        };
        console.log(data);
        form.reset();
    }
});

