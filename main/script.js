// Selecciona todos los elementos con la clase "faq" y los almacena en la variable 'faqs'
const faqs = document.querySelectorAll(".faq");

// Itera sobre cada elemento con la clase "faq"
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {

        // Verifica si el elemento actual tiene la clase "active"
        const isActive = faq.classList.contains("active");

        // Llama a la función para quitar todas las clases "active" de los elementos
        removeActiveClasses();

        // Si el elemento no tenía la clase "active", la agrega; de lo contrario, no hace nada
        if (!isActive) {
            faq.classList.add("active");
        }
    });
});

const removeActiveClasses = () => {
    // Itera sobre cada elemento con la clase "faq"
    faqs.forEach((faq) => {
        // Remueve la clase "active" del elemento actual
        faq.classList.remove("active");
    });
};
