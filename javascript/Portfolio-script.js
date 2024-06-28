window.onscroll = () => {
    document.querySelector(".mountains").style.marginBottom = -scrollY + "px";

    document.querySelector(".stars").style.marginTop = scrollY + "px";

    document.querySelector(".stars").style.marginRight = scrollY * 1.3 + "px";

    document.querySelector(".stars").style.opacity = (500 - scrollY) / 500;

    document.querySelector(".moon").style.marginTop = scrollY + "px";

    document.querySelector(".moon").style.marginLeft = -scrollY * 4 + "px";

    document.querySelector(".light").style.opacity = scrollY / 150;

    document.querySelector(".Home h1").style.marginTop = scrollY + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;

};

const observer = new IntersectionObserver((entries) => {
    entries .forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))

