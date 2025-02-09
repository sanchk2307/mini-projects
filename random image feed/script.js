const container = document.querySelector('.container')
const randomImageURL = 'https://loremflickr.com'
const rows = 10

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${randomImageURL}/${getRandomNumber()}/${getRandomNumber()}`

    container.appendChild(img)
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}