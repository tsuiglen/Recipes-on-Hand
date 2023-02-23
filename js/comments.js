//initialize comment array
var commentList = [
    // {
    //     name: "Glen",
    //     timestamp: Date.now(),
    //     content: "Thread content1",
    // },
    // {
    //     name: "Glen2",
    //     timestamp: Date.now(),
    //     content: "Thread content2",
    // }
]

//function to add a comment to the html
function addComment(comment){
    //adding the structure of a comment with inputs for parameters
    var html = `
    <div class = "discussionComments">
        <div class = "discussionRow">
            <p>
                
                <h3>
                    <img src="../assets/img/avatar.png" width = "30" alt = "avatar profile">
                    ${comment.name}
                </h3>
                ${comment.content}
            </p>
        </div>
	</div>
    `
    //add before the end of the discussion class
    container.insertAdjacentHTML('beforeend', html);
}
console.log(commentList);
//container is the div that holds the comment section
var container = document.querySelector(".discussion");
//intiialize the comment submit button
var btn = document.querySelector(".postBtn");
btn.addEventListener('click',function(){
    console.log("button pressed");
    //receive the values in the fields
    var postComment = document.querySelector(".post");
    //if the field is not empty
    if(postComment.value!=""){
        //create inputComment object that holds the content and the name
        var inputComment = {
            content: postComment.value,
            //whoever is logged in currently will make this comment
            name: localStorage.getItem('currentUser')
        }
        //add to html
        addComment(inputComment);
        //clear the fields
        postComment.value = '';
        //add comment to array
        commentList.push(inputComment);
        //store the list of comments in localStorage to prevent deletion due to refresh
        localStorage.setItem('commentList', JSON.stringify(commentList));
    }
    //if empty output alert
    else{
        alert("Comment field cannot be empty!");
    }
})
//if there are contents in localStorage and commentList has contents
if(localStorage && localStorage.getItem('commentList')){
    //retrieve the object from localStorage
    commentList = JSON.parse(localStorage.getItem('commentList'));
}
//if no contents then create object
else{
    localStorage.setItem('commentList', JSON.stringify(commentList));
}
//ensure the comments are populated on the screen always
for (let comment of commentList){
    addComment(comment);
}