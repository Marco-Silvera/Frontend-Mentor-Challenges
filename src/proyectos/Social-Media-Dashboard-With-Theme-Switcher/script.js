const darkMode = document.querySelector('#darkmode')

darkMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})
