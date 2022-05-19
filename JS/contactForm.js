function validation() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let error_message = document.querySelector("#error_message");

    error_message.style.padding = "8px";

    if(name.length < 1) {
        let text = "Please enter a valid name";
        error_message.innerHTML = text;
        return false;    
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        let text = "Please enter a valid email address";
        error_message.innerHTML = text;
        return false;    
    }

    if(message.length < 20) {
        let text = "Please enter more than 20 characters";
        error_message.innerHTML = text;
        return false;    
    }
    alert('Form submitted successfully')
    return true;
}