//initialize signup and login fields
upName = document.getElementById("upName");
upEmail = document.getElementById("upEmail");
upPassword = document.getElementById("upPassword");
upConfirmPass = document.getElementById("upConfirmPass");
inEmail = document.getElementById("inEmail");
inPassword = document.getElementById("inPassword");

//initialize user array
let users = [];
//create constructor for new SignUps
class SignUp{
    constructor(name,email,password){
        //name, email, and password fields required
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

//function called on submit button
function signUpVerify(){
    //if fields pass all checks remain true
    let valid = true;
    if(!nameCheck()){
        alert("Name field error");
        valid = false;
    }
    if(emailExists()){
        valid = false;
    }
    if(!emailCheck()){
        alert("Email field error");
        valid = false;
    }
    if(!passwordCheck()){
        alert("Password field error. Here are the requirements:\n- 8+ characters\n- At least one uppercase character\n- At least one lowercase character\n- At least one symbol\n- At least one number");
        valid = false;
    }
    console.log(upPassword.value);
    console.log(upConfirmPass.value);
    if(!passwordConfirmCheck()){
        alert("Password does not match!");
        valid = false;
    }
    //if true, then proceed registration
    if(valid==true){
        alert("Success!");
        register();
    }
}

//the name field must be populated
function nameCheck(){
    if(upName.value==""){
        console.log("name bad");
        return false;
    }
    else{
        console.log("name good");
        return true;
    }
}

//function to check validity of email address
function emailCheck(){
    //regular expression pattern for character format 'a+@+a+.+a'
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //if email fulfills this format then check is good
    if (emailPattern.test(upEmail.value)){
        return true;
    }
    //Otherwise false
    else{
        return false;
    }
}

//function to check user array whether email already has been used to sign up
function emailExists(){
    //determining if any user in array has an email matching the field
    let userExists = users.some(user => user.email === upEmail.value);
    //email already exists, terminate
    if(userExists){
        alert("Email already exists, use another");
        return true;
    }
    //continue on with registration
    else{
        return false;
    }
}

//function to check if password meets requirements
function passwordCheck(){
    //regular expression pattern for 8+ characters with casing, numbers, and symbols
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&.])[A-Za-z\d#@$!%*?&.]{8,}$/;
    console.log("checking password");
    //if password is good, proceed with registration
    if(passwordPattern.test(upPassword.value)){
        console.log("password is good");
        return true;
    }
    //otherwise, terminate
    else{
        console.log("password no good");
        return false;
    }
}

//function to check password against confirm password field
function passwordConfirmCheck(){
    console.log("password Match checking")
    //if they match then proceed
    if(upPassword.value==upConfirmPass.value){
        console.log("Password match good");
        return true;
    }
    //otherwise, terminate
    else{
        console.log("Password match Nogood");
        return false;
    }
}

//register function that is called only when all requirements are met
function register(){
    console.log("sign up attempt created");
    //create new instance of signup class for the user
    let user = new SignUp(upName.value, upEmail.value, upPassword.value);
    //add user to the user array
    users.push(user);
    //convert object to JSON string and store user into localStorage
    localStorage.setItem('users',JSON.stringify(users));
    console.log("sign up attempt complete");
}

//verify sign in based on stored user information
function signInVerify() {
    console.log("sign in attempt");
    //convert JSON string to user object
    let storedUsers = JSON.parse(localStorage.getItem('users'));
    //search for user where email and password fields match the user properties
    let matchedUser = storedUsers.find(user => user.email === inEmail.value && user.password === inPassword.value);
    //if there is a match then sign in is successful
    if (matchedUser){
        alert("Sign in successful!");
        //set the current user's name as currentUser stored in localStorage for comments/discussion
        localStorage.setItem('currentUser',matchedUser.name);
    }
    //otherwise, terminate
    else{
        alert("Email or password incorrect!");
    }
}