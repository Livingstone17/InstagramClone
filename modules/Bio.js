const Bio = () => `
<section class="bio">
<div class="profile-photo">
    <img src="./assets/profileImg.jpg" alt="profile-image">
</div>
<div class="user-info">
    <div class="nameFollow">
        <p class="username">Ronaldo <span>
            <i class="fa fa-cog" aria-hidden="true"></i>
            <button>Follow</button>
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </span></p>   
    </div> 
    <div class="other-info">
        <p >3200 <span>posts</span></p>
        <p >356m <span>followers</span></p>
        <p >1k <span>following</span></p>
    </div>
    <p class="name">Cristiano Ronaldo</p>
    <p class="followedBy">Followed by <span>samsonpeter</span></p>
</div>
</section>
`

export default Bio;