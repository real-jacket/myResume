loading.classList.add('active');
      
let specialtags = document.querySelectorAll('[data-x]');
for (let i = 0; i < specialtags.length; i++) {
    specialtags[i].classList.add('offset');
}

slidup();
window.onscroll = function(){
    if(window.scrollY > 0){
        stickyNavbar.classList.add('slide')
    }else{
        stickyNavbar.classList.remove('slide')
    }

    slidup();
}

function slidup() {
    let specialtags = document.querySelectorAll('[data-x]');
    let minindex = 0;
    for (let i = 0; i < specialtags.length; i++) {
        if (Math.abs(specialtags[i].offsetTop - window.scrollY) < Math.abs(specialtags[minindex].offsetTop - window.scrollY)) {
        minindex = i;
        }
    }
    specialtags[minindex].classList.remove('offset');
    let id = specialtags[minindex].id;
    let a = document.querySelectorAll('a[href="#' + id + '"]')[0];
    let li = a.parentNode;
    let children = li.parentNode.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}


let litags = document.querySelectorAll('#navbar > li');
for (let i = 0; i < litags.length; i++) {
    litags[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active');
    }
    litags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active');
    }
}


let atags = navbar.querySelectorAll('a')
for (let i = 0; i < atags.length; i++) {
    atags[i].onclick = function (x) {
        x.preventDefault();
        let sitehref = x.currentTarget.getAttribute('href');
        let siteSection = document.querySelector(sitehref);
        let top = siteSection.offsetTop;

        let currentTop = window.scrollY;
        let targetTop = top - 80;

        function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        var coords = { y: currentTop }; 
        var tween = new TWEEN.Tween(coords) 
        .to({ y: targetTop }, 500) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function () { 
            window.scrollTo(0,coords.y)
        })
        .start(); 
    } 
}
