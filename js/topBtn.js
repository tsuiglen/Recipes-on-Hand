// Get the button by the ID "myBtn" which is declared in HTML
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

//this function is called when the window is scrolled
function scrollFunction() {
  //if the page is scrolled 20px from the top of the document
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //show the button
    mybutton.style.display = "block";
    //if the page is still at the top of the document
  } else {
    //hide the button
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
//this function is called with the onClick event when the button is initialized
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}