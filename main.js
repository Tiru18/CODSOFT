let menuIcon = document.querySelector('#menu-icon');
let navbar = querySelector('.navbar');

menuIcon.onClick =() => {
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('Section');
let navlinks = document.querySelectorAll('header nav a' );

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsettop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(id);

        if(top >= offset && top < offset + height ){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav  a[href*='+ id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.Home-content,heading', {origin: 'top'});
ScrollReveal().reveal('.Home-img, .Services-container,.Portfolio-box,.contact form', {origin: 'button' });
ScrollReveal().reveal('.Home-contact h1, .About-img', {origin:'left'});
ScrollReveal().reveal('..Home-contact p, .About-content', { origin:'right' });

