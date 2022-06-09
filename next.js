
console.log(localStorage.getItem('fname'))

function populateForm(){
    document.getElementById("first").innerHTML = localStorage.getItem('fname')
    document.getElementById("last").innerHTML = localStorage.getItem('lname')
    document.getElementById("email").innerHTML = localStorage.getItem('email')
    document.getElementById("message").innerHTML = localStorage.getItem('message')
}

populateForm();