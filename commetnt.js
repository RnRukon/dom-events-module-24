
// 1.ADD BUTTON EVENT HANDLER-------------
document.getElementById('submit-comment').addEventListener('click', function () {

    //2. GET USER COMMENT----------------------
    const commentBox = document.getElementById('new-comment');
    // const newComment = commentBox.Value;
    //3.create comment paragraph---------------
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    // console.log(newComment);
    // 4.append the comment------------------------
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);
    // 5.CLEAN THE COMMENT BOX----------------
    commentBox.value = "";
})