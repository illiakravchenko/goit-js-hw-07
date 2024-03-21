const form = document.querySelector('.login-form');

form.addEventListener("submit", onSubmit)

function onSubmit (event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();  
    // if (email === "" || password === "") {
    //     return alert('All form fields must be filled in')
    // }
    if (!email || !password) {
        return alert('All form fields must be filled in')
    }
    const dataForm = { email, password, };
    console.log(dataForm);
    form.reset();
}