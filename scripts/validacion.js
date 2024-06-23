function validateEmail() {
    const emailField = document.getElementById('correo');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailField.value)) {
        alert('Por favor, ingrese un correo electrónico válido con una extensión de dominio, como ejemplo@dominio.com');
        return false;
    }
    return true;
}