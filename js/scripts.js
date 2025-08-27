/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_n5a5dkl", "template_wwme2a6",parms).then(alert("Email Sent!!"))
}

// const btn = document.getElementById('button');

// document.getElementById('contactForm')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'service_n5a5dkl';
//    const templateID = 'template_wwme2a6';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Submit';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Submit';
//       alert(JSON.stringify(err));
//     });
// });