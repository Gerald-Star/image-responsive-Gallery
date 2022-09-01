//Get the modal

var modal = document.getElementById("myModal");

//Get the insert and insert it inside the modal-use its alt
//text as a caption.

var img = document.getElementById("myImg");
var modallmg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//Get the img and src and alt(using innerHTML)
img.onclick = function(){
    modal.style.display = "block";
    modallmg.src = this.src;
    captionText.innerHTML = this.alt;
}

//Get the span element class that closes the modal

var span = document.getElementsByClassName("close")[0];

//when the user clicks on span (x), close the modal
span.onclick = function(){
    modal.style.display = ("none");
}