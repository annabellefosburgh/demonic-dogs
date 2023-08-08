async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value
    const password = document.querySelector('#password-signup').value

    if (username && password) {
        const response = await fetch('/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);