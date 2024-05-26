// const slides = [
//     {
//         // title: "Title 1",
//         text: "Let's do some ."
//     },
//     {
//         // title: "Title 2",
//         text: "hello there you are."
//     },
//     {
//         // title: "Title 3",
//         text: "Is everything alright?"
//     },
//     {
//         // title: "Title 4",
//         text: "If there's something you want to tell me you know you can."
//     },
//     {
//         // title: "Title 5",
//         text: "Here maybe art therapy will help!"
//     }
// ];

// let currentSlide = 0;

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     // document.getElementById('title').innerText = slides[currentSlide].title;
//     document.getElementById('text').innerText = slides[currentSlide].text;
// }

// document.body.addEventListener('click', nextSlide);

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('gifPage').classList.remove('hidden');
});