function validateEmail () {
    if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this.value)) {
        return true;
    }
    alert("Please enter a valid email address.")
    return false;
}