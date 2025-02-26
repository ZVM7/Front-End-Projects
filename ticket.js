const name = localStorage.getItem('name');
const email = localStorage.getItem('email');

window.addEventListener('DOMContentLoaded', function() {
    const uploadedImage = localStorage.getItem('uploadedImage');
    if (uploadedImage) {
        const imageElement = document.querySelector('.profile-pic');
        imageElement.src = uploadedImage;
    }

    document.querySelector('.congr-name').innerHTML = `Congrats, <span class="gradient-text">${name}</span>!<br> Your ticket is ready.`;
    document.querySelector('.congr-email').innerHTML = `We've emailed your ticket to <br> <span class='color-email'>${email} </span> and will send updates in<br> the run up to the event.`;

    document.querySelector('.full-name').innerHTML = `${name}`;
    document.querySelector('.prof-email').innerHTML = `${email}`;

});



