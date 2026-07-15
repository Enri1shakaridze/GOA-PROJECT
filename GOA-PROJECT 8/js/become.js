let cart = JSON.parse(localStorage.getItem('cart'))
let redbgcartlength = document.querySelector('.redbgcartlength')
redbgcartlength.textContent = cart.length
redbgcartlength.addEventListener('click', function(){
    window.location = './yourcart.html'
})
function register() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name ===  "" && email === "" && password === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email must contain '@'");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("User already exists!");
        return;
    }

    users.push({
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");

    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("loginEmail").value = email;
}

function login() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("You are member");
        window.location = '../index.html'
    } else {
        alert("Invalid email or password");
    }
}