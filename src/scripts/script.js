var images = document.getElementsByTagName("img");
var button = document.getElementsByTagName("button")[0];
var checkbox = document.querySelectorAll("input[type='checkbox']")[0];
let namePassed ;
let emailPassed ;
let passwordPassed ;
let termsPassed;
document.querySelectorAll("input[type='text']")[0].focus();
for (var i = 0; i < images.length; i++){
    images[i].addEventListener("click", function(){
        alert("Doesn't work without backend :>");
        return true;
    });
}

button.addEventListener("click", function(){
    let name = document.querySelectorAll("input[type='text']")[0];
    let email = document.querySelectorAll('input[type = "email"]')[0];
    let password = document.querySelectorAll('input[type = "password"]')[0];
    checkEmail(email);
    checkName(name)
    checkTerms(checkbox);
    checkPassword(password);
    if(namePassed === true && termsPassed === true && emailPassed === true && passwordPassed === true){
    alert("Success!");
    window.location.reload();
    return true;
    }
    console.log(namePassed, passwordPassed, emailPassed, termsPassed);
    return false;
});

function checkEmail(email) {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        if(emailPassed === false){
            return false;
        }else{
        let warning = document.createElement("p");
        warning.innerText = "Email is invalid";
        warning.textAlign = "left"
        warning.style.color = "red";
        let referenceNode = document.querySelectorAll("input[type='email']")[0];
        insertAfter(warning, referenceNode);
        let div = document.getElementsByClassName("each-field")[1];
        div.style.marginBottom = "20px";
        email.focus();
        emailPassed = false;
        return false;
        }
 }
 return true;
}
function checkName(name){
    var filter = /^([a-zA-Z\-\.\,])+$/;
    if (!filter.test(name.value)) {
        if(namePassed === false){
            return false;
        }else{
        let warning = document.createElement("p");
        warning.innerText = "Name must be only letters, whitespace, and '-.,'";
        warning.textAlign = "left"
        warning.style.color = "red";
        warning.style.marginTop = "100";
        let referenceNode = document.querySelectorAll("input[type='text']")[0];
        insertAfter(warning, referenceNode);
        let div = document.getElementsByClassName("each-field")[0];
        console.log(div)
        div.style.marginBottom = "20px";
        name.focus();
        namePassed = false;
        return false;
        }
    }
    return true;
}
function checkTerms(checkbox){
    if(!checkbox.checked){
        if (termsPassed === false) {
            return false;
        }else{
       let box = document.getElementById("terms-conditions");
       box.style.textDecoration = 'underline';
       box.textDecorationColor = "red";
       let warning = document.createElement("p");
       warning.innerText = "Please check terms and conditions";
       warning.style.color = "red";
       let referenceNode = document.getElementById("terms-conditions");
       insertAfter(warning, referenceNode);
       termsPassed = false;
       return false;
        }
    }
    return true;
}
function checkPassword(password){
    if (password.value.length < 6){
        if(passwordPassed === false){
            return false;
        }else{
        let warning = document.createElement("p");
        warning.innerText = "Password must be greater than 6 characters";
        warning.textAlign = "left"
        warning.style.color = "red";
        warning.style.marginTop = "100";
        let referenceNode = document.querySelectorAll("input[type='password']")[0];
        insertAfter(warning, referenceNode);
        let div = document.getElementsByClassName("each-field")[2];
        console.log(div)
        div.style.marginBottom = "20px";
        password.focus();
        passwordPassed = false;
        return false;
        }
    }
    return true;
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    return true;
}