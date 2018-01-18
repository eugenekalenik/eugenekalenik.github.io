// const lang = document.querySelectorAll('.lang')[0];
// const langChoice = document.querySelectorAll('.lang-choice')[0];
// const times = document.querySelectorAll('.times')[0];

// // show language list
// lang.onclick = function () {
//     langChoice.classList.add('shown');
// }

// // hide language list
// times.onclick = function () {
//     langChoice.classList.remove('shown');
// }

$('.lang').click(function() {
    $('.lang-choice').slideToggle();
});

$('.times').click(function() {
    $('.lang-choice').slideUp();
});

$('.menu').click(function() {
    $('.user-content').slideUp();
    $('.menu-content').slideToggle();
});

$('.user').click(function() {
    $('.menu-content').slideUp();
    $('.user-content').slideToggle();
});