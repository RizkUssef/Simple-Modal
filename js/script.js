let imgs = Array.from(document.querySelectorAll(".p-0 .img-container img"));
let modal = document.getElementById("modal");
let modal_contianer = document.getElementById("modal-contianer");
let modal_img = document.getElementById("modal-img");
let close =document.getElementById("close");
let next =document.getElementById("next");
let prev =document.getElementById("prev");
let index =0;
openModal();
closeModal();
nextImg();
prevImg();
function openModal(){
    for (let i = 0; i < imgs.length; i++) {
        let src = imgs[i].getAttribute("src");
        imgs[i].addEventListener("click", function() {
            showModal();
            setNewSrc(src);
            index=i;
        });
    }
}
function closeModal() {
    close.addEventListener("click", function() {
        hideModal();
    });
    document.addEventListener("keydown", function(e) {
        if(e.key == "Escape") {
            hideModal();
        }
    });
    modal_contianer.addEventListener("click", function(e) {
        if(modal_contianer == e.target) {
            hideModal();
            e.stopPropagation();
        }
    })
}
function nextImg(){
    function handle(){
        index++;
        index=index%(imgs.length);
        setNewSrc(imgs[index].getAttribute("src"));
    }
    next.addEventListener("click",function(){
        handle();
    });
    document.addEventListener("keydown",function (e){
        if(e.key == "ArrowRight") handle();
    })
}
function prevImg(){
    function handle(){
        index--;
        if(index < 0) {
            index  = imgs.length-1;
        }
        setNewSrc(imgs[index].getAttribute("src"));
    }
    prev.addEventListener("click",function(){
        handle();
    })
    document.addEventListener("keydown",function(e){
        if(e.key=="ArrowLeft") handle();
    });
}
function setNewSrc(src) {
    modal_img.setAttribute("src", src);
}
function showModal(){
    modal.style.display = "block";
}
function hideModal(){
    modal.style.display = "none";
}