//apply this script after the slideshow body to load the HTML first which would be blocked otherwise

//initialize the first photo as the starting index
let slideIndex = 1;
//call the showSlides function with the slide index number at the start of the script
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    //add the incremented indices from the next or previous controls to the function call
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    //set the current slide index to the current slide
    showSlides(slideIndex = n);
}

//show slides function
function showSlides(n) {
    //initialize loop index variable
    let i;
    //initialize element arrays based on class names
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    //loop back to first slide if slide index goes over limit
    if (n > slides.length) { slideIndex = 1 }
    //loop to the end slide if slide index goes before the lower limit
    if (n < 1) { slideIndex = slides.length }
    //hides every single slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //sets all dots to inactive
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //index starting at 0, display the desired slide image
    slides[slideIndex - 1].style.display = "block";
    //index starting at 0, activate the desired dot
    dots[slideIndex - 1].className += " active";
}