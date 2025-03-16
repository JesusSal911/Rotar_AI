const languageToggle = document.getElementById("language-toggle");
const flagIcon = document.getElementById("flag-icon");
const textsToChange = document.querySelectorAll("[data-section]");

// Guardar el texto original (inglés) para restaurarlo después
textsToChange.forEach((el) => {
    if (!el.dataset.originalText) { 
        el.dataset.originalText = el.innerHTML.trim();
    }
});

// Función para cambiar idioma
function cambiarIdioma(idioma) {
    if (idioma === "en") {
        textsToChange.forEach((el) => {
            el.innerHTML = el.dataset.originalText;
        });

        localStorage.setItem("idioma", "en");
        flagIcon.src = "img/es copy.png"; // Icono de español
    } else {
        fetch(`Rotar_Al/language/es.json`)
            .then(res => res.json())
            .then(data => {
                textsToChange.forEach((el) => { 
                    const section = el.dataset.section;
                    const value = el.dataset.value;

                    if (data[section] && data[section][value]) {
                        const firstChild = el.firstChild;
                        if (firstChild.nodeType === 3) {
                            firstChild.nodeValue = data[section][value];
                        }
                    }
                });

                localStorage.setItem("idioma", "es");
                flagIcon.src = "img/en.jpg"; // Icono de inglés
            })
            .catch(error => console.error("Error cargando el JSON:", error));
    }
}

// Cargar el idioma guardado al iniciar
const idiomaGuardado = localStorage.getItem("idioma") || "en";
cambiarIdioma(idiomaGuardado);

// Evento de clic en el botón flotante
languageToggle.addEventListener("click", () => {
    const nuevoIdioma = localStorage.getItem("idioma") === "es" ? "en" : "es";
    cambiarIdioma(nuevoIdioma);
});
