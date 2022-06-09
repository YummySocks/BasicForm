

function submitAction() {
    const email = document.forms["contactForm"]["coEmail"].value
    const fName = document.forms["contactForm"]["firName"].value
    const lName = document.forms["contactForm"]["lasName"].value
    const messA = document.forms["contactForm"]["messageA"].value
    if(email == ""||fName==""||lName == ""){
        alert("Please fill out all the fields")
        return false
    } else{
        console.log("hello from the other side")
        localStorage.setItem("fname", fName)
        localStorage.setItem("lname", lName)
        localStorage.setItem("email", email)
        localStorage.setItem("message", messA)
        location.href='./next.html'
    }

}