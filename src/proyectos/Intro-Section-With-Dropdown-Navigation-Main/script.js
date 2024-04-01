const btnMenu = document.querySelector('.menu');
const btnCloseMenu = document.querySelector('.close-menu');
const btnFeatures = document.querySelector('.btn-features');
const btnCompany = document.querySelector('.btn-company');

btnMenu.addEventListener('click', () => {
    const menu = document.querySelector('.menu-list');
    menu.classList.toggle('hidden');
});

btnCloseMenu.addEventListener('click', () => {
    const menu = document.querySelector('.menu-list');
    menu.classList.toggle('hidden');
})

btnFeatures.addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown-features');
    const imageArrowFeatures = document.querySelector('.arrow-down-features');
    dropdown.classList.toggle('hidden');
    if (dropdown.classList.contains('hidden')) {
        imageArrowFeatures.src = 'img/icon-arrow-down.svg';
    } else {
        imageArrowFeatures.src = 'img/icon-arrow-up.svg';
    }
});

btnCompany.addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown-company');
    const imageArrowFeatures = document.querySelector('.arrow-down-company');
    dropdown.classList.toggle('hidden');
    if (dropdown.classList.contains('hidden')) {
        imageArrowFeatures.src = 'img/icon-arrow-down.svg';
    } else {
        imageArrowFeatures.src = 'img/icon-arrow-up.svg';
    }
});