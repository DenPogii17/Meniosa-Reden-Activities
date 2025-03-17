function Login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "meniosa" && password === "reden17") {
        message.style.color = "blue";
        message.textContent = "Login Successfully";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }
}