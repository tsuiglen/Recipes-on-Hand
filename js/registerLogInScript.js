//initialize register form and outer register form classes
const registerForm = document.querySelector(".register");
const registerDiv = document.querySelector(".registerDiv");
//initialize login form and outer login form classes
const logInForm = document.querySelector(".logIn");
const logInDiv = document.querySelector(".logInDiv");

//view Log In form using the onClick trigger when the user selects 'Sign In'
function viewLogInForm(){
    //slide login form back into view
    logInForm.style.marginLeft = "0%";
    //activate both form and div to have clickable elements
    logInForm.style.pointerEvents = "auto";
    logInDiv.style.pointerEvents = "auto";
    //make div opaque to view elements
    logInDiv.style.opacity = "1";
    //slide register form away from view
    registerForm.style.marginLeft = "-200%";
    //render both the form and div to be unclickable to avoid complications
    registerForm.style.pointerEvents = "none";
    registerDiv.style.pointerEvents = "none";
    //make div transparent in case of any leakage
    registerDiv.style.opacity = "0";
}

function viewRegisterForm(){
    //slide log in form away from view
    logInForm.style.marginLeft = "-200%";
    //render both the form and div to be unclickable to avoid complications
    logInForm.style.pointerEvents = "none";
    logInDiv.style.pointerEvents = "none";
    //make div transparent in case of any leakage
    logInDiv.style.opacity = "0";
    //slide register form back into view
    registerForm.style.marginLeft = "0%";
    //activate both form and div to have clickable elements
    registerForm.style.pointerEvents = "auto";
    registerDiv.style.pointerEvents = "auto";
    //make div opaque to view elements
    registerDiv.style.opacity = "1";
}