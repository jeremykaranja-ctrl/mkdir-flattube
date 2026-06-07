//store comments
let comments = [];

//anonymous function to add a comment 
const addcomment = function (username , text){
    comments.push({
        username,
        tex
    });
console.log("cooment added!");
};

//arrow function to edit a comment 
const editcomment = (index, newtext) => {
    if (index >=0 && index < comments.length){
        comments[index].text = newtext;
        console.log("comment updated!");
    } else{
        console.log("comment not found.");
    }
};

//test the feature
addcomment("jeremy", "greate video!");
addedcomment("khadatorian", "veryhelpful content!");
editcomment(0, "amazing video!");
console.log(comments); 
 
// arrarys for global access
const video =title = ["javascript basics","css flexbox","html forms"];
const comments = [];

const createcomment = ( videotitle, comment) => ({
    vidotitle,
    commenttext
});

const handlecomment = function(){
const vei=dioindex=parseint(propt("select a vedio (0-2"):""));
const commenttext = prompt("enter your comment:");
const comment = createcomment(video[videoindex], commenttext);
comments.push(comment);
console.log("comment added!");
}

return 
 updatecomment(newtext) {
    comment.commenttext=newtext;
    return comment ;
};

const updatemyconment = handlecomment();
console.log(comments);
updatemycomment("this video was very helpful!");
console.log(comments);




