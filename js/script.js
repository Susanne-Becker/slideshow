/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*bron: https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9*/
/*bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event*/
/*bron: https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/slice*/
/*bron: https://stackoverflow.com/questions/9266739/javascript-for-var-i-0-browser-incompatibilities*/
/*bron: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key*/
/*bron: https://stackoverflow.com/questions/23713394/use-array-to-create-dynamic-image-slider*/

var right = document.getElementById("right");
var left = document.getElementById("left");

var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");

var slide_array = Array(slide1, slide2, slide3, slide4);

var slide_length = slide_array.length;

var i = 0;

left.onclick = () => {
    i--;
    if (i < 0) {
        i = slide_length - 1;
    }
    slide_array[i].checked = true;
};

right.onclick = () => {
    i++;
    if (i > slide_length - 1) {
        i = 0;
    }
    slide_array[i].checked = true;
};

function keyboard(event) {
    if (event.key == "ArrowRight") {
        i++;
        if (i > slide_length - 1) {
            i = 0;
        }
        slide_array[i].checked = true;
    } else if (event.key == "ArrowLeft") {
        i--;
        if (i < 0) {
            i = slide_length - 1;
        }
        slide_array[i].checked = true;
    }
}

window.addEventListener("keydown", keyboard);



/*We slaan de URL van de JSON die we willen ophalen op in een variabele*/ 
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
/*Om een ​​aanvraag te maken, moeten we een nieuwe aanvraagobjectinstantie van de XMLHttpRequestconstructor maken met behulp van het newtrefwoord*/
let request = new XMLHttpRequest();
/*Nu moeten we het verzoek openen met behulp van de open()methode*/
request.open('GET', requestURL);
/*Hier stellen we de in responseTypeop JSON, zodat XHR weet dat de server JSON zal retourneren en dat dit achter de schermen moet worden geconverteerd naar een JavaScript-object. Vervolgens sturen we het verzoek met de send()methode*/
request.responseType = 'json';
request.send();

/*Hier wachten we op het antwoord van de server en het handelen we het vervolgens af*/
request.onload = function () {
    const movie = request.response;
    console.log(movie);
    showMovies(movie);
}

const li = document.querySelector('li');

/*Eerst maken we nieuwe elementen: article, H2, p & ul. Dan geven we de h2 de helden namen mee uit JSON. Daarna geven we de 3 paragrafen informatie mee. Hierna slaan we de power eigenschappen (JSON) op in een nieuwe const en creeeren we een 'li', deze zetten we in een ul. Als laatste zetten we de H2, p, ul's binnen de article en zetten we de article binnen de section*/
function showMovies(jsonObj) {
    const info = jsonObj; 
    console.log(info);
    for (let i = 0; i < info.length; i++) { //For loop. Eerst i = 0. Dan i = groter dan de lengte van info (6). Daarna i ++ dus naar volgende movie.
        console.log(info);
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3 = document.getElementById("img3");
        var img4 = document.getElementById("img4");

        
        img1.src = info[i].cover;
        img2.src = info[i].cover;
        img3.src = info[i].cover;
        img4.src = info[i].cover;



    }
}
