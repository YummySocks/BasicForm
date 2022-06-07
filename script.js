

function submitAction() {
    const email = document.forms["contactForm"]["coEmail"].value
    const fName = document.forms["contactForm"]["firName"].value
    const lName = document.forms["contactForm"]["lasName"].value
    if(email == ""||fName==""||lName == ""){
        alert("Please fill out all the fields")
        return false
    }

}