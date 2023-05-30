// Get the current URL
const url = new URL(window.location.href);
const queryParams = new URLSearchParams(url.search);

// Access individual query parameters
const langUrl = queryParams.get('lang');
var lang = langUrl ? langUrl : "fr";

chooseLanguage();

$("#frButton").on("click", () => {
    lang = "fr";
    // $("#langButton").css("background-image: url(/background.jpg);")
    //$("#langButton").css("background-image", "url(/assets/img/graph.png);")
    chooseLanguage();
});

$("#enButton").on("click", () => {
    lang = "en";
    chooseLanguage();
});

$("#language").change(() => {
    lang = $("#language").val();
    chooseLanguage();
});

function chooseLanguage() {
    switch (lang) {
        case "fr":
            loadLanguage("./assets/lib/lang/fr.json");
            $("#langButton").css("background-color", "#5299FF");
            break;

        case "en":
            loadLanguage("./assets/lib/lang/en.json");
            $("#langButton").css("background-color", "#FF5454");
            break;
    }

    updateLangURL();
}

async function loadLanguage(fileName) {
    fetch(fileName)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                $(`[lang-id=${element["identifier"]}]`).html(element["content"]);
            });
        });
}

function addLanguageParameter(event, target = "_self") { //Ajoute la langue
    event.preventDefault(); // Empêche le comportement par défaut du lien

    var url = event.target.href; // Récupère l'URL du lien
    var parametre = `lang=${lang}`; // Paramètre à ajouter

    // Vérifie si l'URL contient déjà des paramètres
    if (url.indexOf('?') !== -1) {
        // Si oui, ajoute le nouveau paramètre en utilisant "&"
        url += '&' + parametre;
    } else {
        // Sinon, ajoute le nouveau paramètre en utilisant "?"
        url += '?' + parametre;
    }

    window.open(url, target);
}

function updateLangURL() {
    let newUrl = window.location.href.split('?')[0] + `?lang=${lang}`;

    history.pushState(null, '', newUrl);
}