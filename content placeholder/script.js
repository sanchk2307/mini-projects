const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const authorName = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, mollitia!';
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    authorName.innerHTML = 'John Doe';
    date.innerHTML = 'Jan 10, 2025';

    animatedBgs.forEach(el => el.classList.remove('animated-bg'))
    animatedBgTexts.forEach(el => el.classList.remove('animated-bg-text'))
}

