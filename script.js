/*=================== toggle icon navbar ======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*=================== scroll section active link ======================*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*===================== sticky navbar =============================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*====== remove toggle icon navbar and navbar when click navbar link (scroll) =======*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

/*=================== Contact Form → WhatsApp ======================*/

let contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.querySelector('[name="name"]').value;
    let email = document.querySelector('[name="email"]').value;
    let phone = document.querySelector('[name="phone"]').value;
    let subject = document.querySelector('[name="subject"]').value;
    let message = document.querySelector('[name="message"]').value;

    // Your WhatsApp number
    let whatsappNumber = "923348761317";

    let whatsappMessage = `New Contact Form Message

Name: ${name}
Email: ${email}
Mobile: ${phone}
Subject: ${subject}

Message:
${message}`;

    let whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    alert("Your message is ready to send on WhatsApp!");

    window.open(whatsappURL, '_blank');

    contactForm.reset();
});