function login() {
    user_name = document.getElementById("email").value;
    password = document.getElementById("password").value;
    user = "admin@raj.com";
    passcode = "raj@123";
    if (user_name == user && password == passcode) {
        alert("Login Successful");
        window.open("calculator.html");
    } else {
        alert("Login Failed Try Again with correct credentials");
    }
}