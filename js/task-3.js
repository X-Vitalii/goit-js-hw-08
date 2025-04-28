const userNameElem = document.querySelector('#name-input');
userNameElem.addEventListener('input', e => {
    const name = userNameElem.value.trim();
    const spanElem = document.querySelector('#name-output');    
   if (name.length > 0) {
        spanElem.textContent = name;
    } else {
        spanElem.textContent = 'Anonymous';
    }
});
