function openBlog(blogNumber) {
    const blogContent = document.getElementById(`blog-${blogNumber}`).innerHTML;
    const newTab = window.open();
    newTab.document.write(blogContent);
    newTab.document.close();
}

function getLikeCount(blogNumber) {
    return parseInt(localStorage.getItem(`likeCount${blogNumber}`)) || 0;
}

function setLikeCount(blogNumber, likeCount) {
    localStorage.setItem(`likeCount${blogNumber}`, likeCount);
}

function updateLikeCount(blogNumber) {
    const likeCountElement = document.getElementById(`like-count-${blogNumber}`);
    const likeCount = getLikeCount(blogNumber);
    likeCountElement.textContent = likeCount;
}

function likeBlog(blogNumber) {
    let likeCount = getLikeCount(blogNumber);
    likeCount++;
    setLikeCount(blogNumber, likeCount);
    updateLikeCount(blogNumber);
}

function unlikeBlog(blogNumber) {
    let likeCount = getLikeCount(blogNumber);
    if (likeCount > 0) {
        likeCount--;
        setLikeCount(blogNumber, likeCount);
        updateLikeCount(blogNumber);
    }
}

function addComment(blogNumber) {
    const commentsElement = document.getElementById(`comments-${blogNumber}`);
    const comment = commentsElement.value;
    const commentsDisplayElement = document.getElementById(`comments-display-${blogNumber}`);

    // Display the comment below comments section
    commentsDisplayElement.innerHTML += `<p>${comment}</p>`;

    // You can save the comments in local storage if needed
    // localStorage.setItem(`comments${blogNumber}`, comment);

    // Clear the comment input
    commentsElement.value = '';
}

// Initialize like counts on page load
updateLikeCount(1);
updateLikeCount(2);