const markAll = document.querySelector('#mark-all');
const numberElement = document.querySelector('#number');
const notReadElements = document.querySelectorAll('.not-read');
const posts = document.querySelectorAll('.post');

numberElement.innerText = notReadElements.length;

posts.forEach((post) => {
    post.addEventListener('click', () => {
        post.querySelector('.status').classList.remove('not-read')
        post.style.background = 'transparent'
        updateNotification()
    })
})

markAll.addEventListener('click', () => {
    notReadElements.forEach((notReadElement) => {
        notReadElement.classList.remove('not-read')
        posts.forEach((post) => {
            post.querySelector('.status').classList.remove('not-read')
            post.style.background = 'transparent'
        })
    })
    updateNotification()
})

function updateNotification() {
    const notReadElementsActual = document.querySelectorAll('.not-read')

    numberElement.innerText = notReadElementsActual.length;
}