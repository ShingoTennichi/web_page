// /* jQuery */
// /* typing each letters */
// var TxtRotate = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 100) || 10000;/*the time until deleting*/
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
//   };

//   TxtRotate.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 150 - Math.random() * 100; /*typing speed*/

//     if (this.isDeleting) { delta /= 5; }/*deleting speed*/

//     if (!this.isDeleting && this.txt === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 500; /*the time until restarting*/
//     }

//     setTimeout(function() {
//       that.tick();
//     }, delta);
//   };

//   window.onload = function() {
//     var elements = document.getElementsByClassName('txt-rotate');
//     for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-rotate');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtRotate(elements[i], JSON.parse(toRotate), period);
//       }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//     document.body.appendChild(css);
//   };



// * I like... =================================================================
const reviews = [
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
    const item = reviews[currentItem];
    img.src = item.img;
    info.textContent = item.text;
    text.textContent = item.title;
}

nextBtn.addEventListener('click', function() {
    currentItem += 1;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    show_person();
})

prevBtn.addEventListener('click', function() {
    currentItem -= 1;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    show_person();
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    show_person();
})

