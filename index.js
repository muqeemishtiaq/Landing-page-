function Name() {
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");

    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
    } else {
        nameError.textContent = "";
    }
}
function Email() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if (!email.includes("@") || !email.includes(".") ) {
        emailError.textContent = "Please enter a valid email address.";
    } else {
        emailError.textContent = ""; 
    }
}
function Comments () {
    const comments = document.getElementById("comments").value;
    const commentsError = document.getElementById("commentsError")
    if (comments.length < 10) {
        commentsError.textContent = "Comments must be 10 characters long.";
    } else if (comments.length > 50) {
        commentsError.textContent = "Comments cannot more than 50 characters.";
    } else {
        commentsError.textContent = ""; 
    }
}