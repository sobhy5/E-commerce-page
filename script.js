var mainimg = document.getElementById("mainimg");
var small_img = document.getElementsByClassName("small_img");
small_img[0].onclick = function(){
    mainimg.src = small_img[0].src;
}

small_img[1].onclick = function(){
    mainimg.src = small_img[1].src;
}

small_img[2].onclick = function(){
    mainimg.src = small_img[3].src;
}


small_img[3].onclick = function(){
    mainimg.src = small_img[3].src;
}


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the username and password values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you can add authentication logic (e.g., checking credentials)
        // For demonstration purposes, we'll just redirect to Home.html

        if (username && password) { // Simple check if fields are not empty
            window.location.href = 'Home.html'; // Redirect to Home.html
        } else {
            alert('Please enter both username and password');
        }
    });
});
