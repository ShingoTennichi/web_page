// * I like... =================================================================
const introduce = [
    {
        id : 1,
        title : "Manga and Drawing",
        img : "images/IMG_2.jpg",
        text : "One of the best part of japanese culture is Manga. They give me energy and encourage me to tyr new experience that I was afraid of such as programming, study abroad to learn English and communicate with people who I meet first time. Also drawing is really interesting because I just have fun to draw a character, I can draw well, but I can't draw well when I try to improve drawing well. It tells me just have fun makes me better.",
    },
    {
        id : 2,
        title : "The person I look up to",
        img : "images/IMG_3.jpeg",
        text : "I was a basketball player since I was 10 to 22 years old. My hero was always him, Kobe Bryant. He was super intense. Wake up early, practice a lot and study hard. As you can imagine, following what he did is really difficult, but I follow him as possible as I can. Now, I'm learning faster and next I'm the parson like him in other industry.",
    },
    {
        id : 3,
        title : "Do Love my dog",
        img : "images/IMG_4.JPG",
        text : "He passed out on Aug 3 2021, but he is still living in my heart. If you want to join our memory, I prepared several nice photo of him for you. I'm sure tha you are going to feel what you have never felt relaxing felling. Click the Gallery in navigation bar. Enjoy the photos and this website too!",
    }
];

const img = document.getElementById("I like");
const info = document.getElementById("story");
const text = document.getElementById("title");

const prevBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    show_person(currentItem);
});

function show_person() {
    const item = introduce[currentItem];
    img.src = item.img;
    info.textContent = item.text;
    text.textContent = item.title;
}

nextBtn.addEventListener('click', function() {
    currentItem += 1;
    if(currentItem > introduce.length - 1) {
        currentItem = 0;
    }
    show_person();
})

prevBtn.addEventListener('click', function() {
    currentItem -= 1;
    if(currentItem < 0) {
        currentItem = introduce.length - 1;
    }
    show_person();
});
