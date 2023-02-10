

export default function display_login_form () {
    const login_form_container = document.getElementById('login-form');
    console.log(login_form_container)
    login_form_container.classList.toggle('display-login-form');
}

