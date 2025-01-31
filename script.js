let a = document.querySelectorAll('strong');
let rightColImg = document.querySelector(".right-col img"); 

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        let b = document.querySelectorAll(".active");
        for (let j = 0; j < b.length; j++) {
            b[j].classList.remove('active');
        }

        this.classList.add('active');

        let dataImage = this.getAttribute('data-image');

        rightColImg.src = dataImage;
    });
}

 