
const Gallery = () => {

return `
<input type="file" name="foto" id="addFotoInput"> 
<label for="addFotoInput">
<i class="add-foto fa fa-plus-square" aria-hidden="true"></i>
</label>

<section class="gallery">
    <div class="post-nav">
        <a href="#" class="post-link active"><i class="fa fa-table" aria-hidden="true"></i> POSTS</a>
        <a href="#" class="post-link"> <i class="fa fa-play-circle-o" aria-hidden="true"></i> VIDEOS</a>
        <a href="#" class="post-link"><i class="fa fa-tags" aria-hidden="true"></i> TAGGED</a>
        <a href="#" class="post-link"><i class="fa fa-play-circle-o" aria-hidden="true"></i> REELS</a>
    </div>
    <div class="posts">
        <div class="row">
            <img src="https://images.pexels.com/photos/6128322/pexels-photo-6128322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <img src="https://images.pexels.com/photos/5605422/pexels-photo-5605422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <img src="https://images.pexels.com/photos/8104729/pexels-photo-8104729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <img src="https://images.pexels.com/photos/5886187/pexels-photo-5886187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <img src="https://images.pexels.com/photos/10215813/pexels-photo-10215813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <img src="https://images.pexels.com/photos/10469127/pexels-photo-10469127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        </div>
    </div>
</section>
 <script>
 // Get the container element
 var linkContainer = document.querySelector(".post-nav");
 
 // Get all buttons with class="btn" inside the container
 var links = linkContainer.querySelector(".post-link");
 
 // Loop through the buttons and add the active class to the current/clicked button
 for (var i = 0; i < links.length; i++) {
   links[i].addEventListener("click", function() {
     var current = document.querySelector(".active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
   });
 }
 </script>
`
} 


export default Gallery;