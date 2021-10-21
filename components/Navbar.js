const toggle = document.querySelector('.toggle');
const items = document.querySelector('.Nav-items-container');

toggle.addEventListener('click', function() {
        items.classList.toggle('toggle-visible');
    }
);