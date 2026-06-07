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
