import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!

//mouseover ve mouseout
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = "green";
        this.style.transition = "0.2s";
        this.style.color = "white"
    });

    navLink.addEventListener('mouseout', function(e) {
        this.style.backgroundColor = "";
        this.style.transition = "0.2s";
        this.style.color = "black"
    });
});

//keydown
document.addEventListener("keydown", function(event) {
    alert("Basılan Tuş: " + event.key);
});

//wheel ve scrool
document.addEventListener("wheel", function(event) {
    document.body.style.cursor = "grab";
});
document.addEventListener("scroll", function(event) {
    document.body.style.cursor = "help";
});

//load
window.addEventListener('load', function() {
    alert("Sayfa tamamen yüklendi");
});

//focus
const imgs = document.querySelectorAll("img");
imgs.forEach(function(img) {
    img.addEventListener('focus', function(e) {
        this.style.opacity = "0.5"
    });
});

//resize
window.addEventListener('resize', function() {
    const prevItem = document.querySelector("p");
    if (prevItem) {
        prevItem.remove();
    }
    
    const newItem = document.createElement("p");
    newItem.textContent = `Yükseklik: ${window.innerHeight}px, Genişlik: ${window.innerWidth}px`;
    document.body.prepend(newItem);

});