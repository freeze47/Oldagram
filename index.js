const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 42480
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15229
    }
]

let feed = document.querySelector("#feed")

function main(){
    for (let i = 0; i < posts.length; i++){
        feed.innerHTML += `<section class="post">
                <div class="heroSection">
                    <img src="${posts[i].avatar}" alt="${posts[i].name}" class="profile-logo">
                    <div class="about">
                        <h2>${posts[i].name}</h2>
                        <h3>${posts[i].location}</h3>
                    </div>
                </div>
                 <img src="${posts[i].post}" alt="${posts[i].name}" class="post">
                 
                <ul class="interaction">
                    
                    <li>
                        <button class="like-btn" data-index="${i}" >
                        <img src="/images/icon-heart.png" alt="heart" class="btn likes-icon">
                        </button>
                    </li>
                    <li>
                        <button>
                        <img src="/images/icon-comment.png" alt="dialogue bubble" class="btn comment-icon">
                        </button>
                        
                    </li>
                    <li>
                        <button>
                        <img src="/images/icon-dm.png" alt="right arrow" class="btn dm-icon">
                        </button>
                    </li>
                    
                </ul>
                <p class="likes-num">${posts[i].likes} likes</p>
                <p class="comment">${posts[i].username} <span >${posts[i].comment}</span></p>
            </section>`
    }
}



main()

document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", function() {
        let heartIcon = this.querySelector(".likes-icon");
        heartIcon.classList.toggle("liked");

        let postSection = this.closest(".post");
        let likesNum = postSection.querySelector(".likes-num");

        let likes = parseInt(likesNum.textContent);

        if (heartIcon.classList.contains("liked")) {
            likesNum.textContent = `${likes + 1} likes`;
        } else {
            likesNum.textContent = `${likes - 1} likes`;
        }
    });
});

