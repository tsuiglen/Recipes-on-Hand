//initialize post array
var postList = [
    // {
    //     name: "Glen",
    //     timestamp: Date.now(),
    //     title: "Thread title",
    //     content: "Thread content",
    // },
    // {
    //     name: "Glen2",
    //     timestamp: Date.now(),
    //     title: "Thread title2",
    //     content: "Thread content2",
    // }
]
//function to add post to html
function addPost(post){
    //adding the structure of a post with inputs for parameters
    var html = `
    <div class = "discussionComments">
        <div class = "discussionRow">
            <p>
                <h3>
                    <img src="../assets/img/avatar.png" width = "30" alt = "avatar profile">
                    ${post.name}
                </h3>
                <h4>
                    ${post.title}
                </h4>
                ${post.content}
            </p>
        </div>
    </div>
    `
    //add before the end of the discussion class
    container.insertAdjacentHTML('beforeend', html);
}
console.log(postList);
//container is the div that holds the post section
var container = document.querySelector(".discussion");
// for (let post of postList){
//     addPost(post);
// }
//initialize the post submit button
var btn = document.querySelector(".postBtn");
btn.addEventListener('click',function(){
    console.log("button pressed");
    //receive the values in the fields
    var postTitle = document.querySelector(".title");
    var postPost = document.querySelector(".post");
    //if the field is not empty
    if(postPost.value!=""&&postTitle.value!=""){
        //create post object that holds the title, content, and name
        var post = {
            title: postTitle.value,
            content: postPost.value,
            //whoever is logged in currently will make this post
            name: localStorage.getItem('currentUser')
        }
        //add to html
        addPost(post);
        //clear the fields
        postTitle.value = '';
        postPost.value = '';
        //add post to array
        postList.push(post);
        console.log(postList);
        //store the list of posts in localStorage to prevent deletion due to refresh
        localStorage.setItem('postList', JSON.stringify(postList));
    }
    //if empty output alert
    else{
        alert("Comment field cannot be empty!");
    }
})
//if there are contents in localStorage and postList has contents
if(localStorage && localStorage.getItem('postList')){
    //retrieve the object from localStorage
    postList = JSON.parse(localStorage.getItem('postList'));
}
//if no contents then create object
else{
    localStorage.setItem('postList', JSON.stringify(postList));
}
//ensure the posts are populated on the screen always
for (let post of postList){
    addPost(post);
}