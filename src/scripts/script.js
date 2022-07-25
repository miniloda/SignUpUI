// REFACTOR: change the three function so that
// they use queryselectorall to get the elements

var images = document.getElementsByTagName("img");
var button = document.getElementsByTagName("button")[0];
var checkbox = document.querySelectorAll("input[type='checkbox']")[0];
// Added 4 variables to track if the email, name, password, and terms are valid
let namePassed ;
let emailPassed ;
let passwordPassed ;
let termsPassed;
let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", function () {
        if (inputs[i].type === "email") {
            checkEmail(inputs[i]);
        } else if (inputs[i].type === "text") {
            checkName(inputs[i]);
        } else if (inputs[i].type === "password") {
            checkPassword(inputs[i]);
        }
    }
    );
    // add event listener for enter
    inputs[i].addEventListener("keyup", function (event) {
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("submit").click();
        }
    });
}

document.querySelectorAll("input[type='text']")[0].focus();
for (var i = 0; i < images.length; i++){
    images[i].addEventListener("click", function(){
        //When image is clicked, it will redirect to oauth.html in a new page
        window.open("oauth.html", "_blank");
        return true;
    });
}

button.addEventListener("click", function(){
    if(!(namePassed && emailPassed && passwordPassed && termsPassed)){
        document.getElementsByClassName("container")[0].style.height = "700px";
    }else{
        document.getElementsByClassName("container")[0].style.height = "650px";
    }
    let name = document.querySelectorAll("input[type='text']")[0];
    let email = document.querySelectorAll('input[type = "email"]')[0];
    let password = document.querySelectorAll('input[type = "password"]')[0];
    checkEmail(email);
    checkName(name)
    checkTerms(checkbox);
    checkPassword(password);
    if(namePassed === true && termsPassed === true && emailPassed === true && passwordPassed === true){
    alert("Success!");
    //Reload because why not. Resets the html
    //OPTIMIZE:Don't rely on reloading html.
    window.location.reload();
    return true;
    }
    return false;
});

function checkEmail(email) { // TODO: ADD green check mark if email is valid and red x-mark if not
    //Use regex for email validation
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let referenceNode = document.querySelectorAll("input[type='email']")[0];
    let div = document.getElementsByClassName("each-field")[1];
    if (!filter.test(email.value)) {
        //Here we use the same logic for all checks. Since we initialized all 4 check variables as undefined.
        //Then if we find one that is false, we know that the check failed on the last check. However, if it is true or undefined,
        if(emailPassed === false){
            return false;
        }else{
            //We need to add the elements for the warnings
        let warning = document.createElement("p");
        warning.innerText = "Email is invalid";
        warning.textAlign = "left"
        warning.style.color = "red";
        insertAfter(warning, referenceNode);
        div.style.marginBottom = "30px";
        email.focus();
        emailPassed = false;
        return false;
        }
 }
 //this only works if email is valid.
 if(emailPassed === false){
    //Checks if the previous check is false. If it is false, then there are warnings in the html, we need to remove it
    let child = div.children[1];
    div.removeChild(child);
    div.style.marginBottom = "0px";
    
}
emailPassed = true;
 return true;
}
function checkName(name){
    let referenceNode = document.querySelectorAll("input[type='text']")[0];
    let div = document.getElementsByClassName("each-field")[0];
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
        insertAfter(warning, referenceNode);

        div.style.marginBottom = "30px";
        name.focus();
        namePassed = false;
        return false;
        }
    }
    if(namePassed === false){
        let child = div.children[1];
        div.removeChild(child);
        div.style.marginBottom = "0px";
      
    }
    namePassed = true;
    return true;
}
function checkTerms(checkbox){
    let div = document.getElementsByClassName("terms")[0];
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
    if(termsPassed === false){
        let child = div.children[2];
        div.removeChild(child);
        div.style.marginBottom = "0px";
        
    }
    termsPassed = true;
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
        div.style.marginBottom = "20px";
        password.focus();
        passwordPassed = false;
        return false;
        }
    }
    if(passwordPassed === false){
            let child = div.children[2];
            div.removeChild(child);
            div.style.marginBottom = "0px";
            
    }
    passwordPassed = true;
    return true;
}
function insertAfter(newNode, referenceNode) {
    //insert after a div using referenceNode and the insertBefore method
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    return true;
}

