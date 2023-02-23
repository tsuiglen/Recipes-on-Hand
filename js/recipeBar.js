//initialize buttons from document
var heartBtn = document.querySelector(".heart");
var fbBtn = document.querySelector(".facebook");
var printBtn = document.querySelector(".print");
var emailBtn = document.querySelector(".email");
//initialize like status and recipe classes that hold the content
var liked = false;
var title = document.querySelector(".recipeDesc h2").textContent;
var recipe = document.querySelector(".methodText").textContent;

console.log("title value: " + title.value);

//when the heart button is pressed, create inverting status based on whether it was liked already
heartBtn.addEventListener('click',function(){
    console.log("heart button pressed");
    //if post was already liked, then pressing heart button again will unlike
    if(liked){
        liked = false;
        alert("You unliked this! :(")
    }
    //if post wasn't already liked, then pressing heart button again will like
    else{
        liked = true;
        alert("You liked this! :)");
    }
})

//when the facebook button is pressed, create a link to the facebook sharer URL
fbBtn.addEventListener('click',function(){
    console.log("FB button pressed");
    const shareUrl = "https://www.facebook.com/sharer/sharer.php?href=";
    //create a new window for the facebook sharer URL
    window.open(shareUrl, "_blank");
})

//when the print button is pressed, create a printable copy of the recipe page
printBtn.addEventListener('click',function(){
    console.log("print button pressed");
    //use print function to open up the browser print window
    window.print();
    
})

//when the email button is pressed, open up the client's default email application
emailBtn.addEventListener('click',function(){
    console.log("email button pressed");
    //include the text from the recipe title and instructions
    const emailBody = `Check out this recipe: ${title}\n\n${recipe}`;
    window.location.href = `mailto:?subject=Recipe: ${title}&body=${encodeURIComponent(emailBody)}`;
})