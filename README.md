# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Voor dit project heb ik een slideshow/carrousel voor bloemen gemaakt. De gebruiker kan deze bedienen met de radio buttons onderop, met de pijltjes links en rechts en met de pijltjes op het toetsenbord. Link naar demo:https://susanne-becker.github.io/frontend-voor-designers-1920/opdracht2/demo/index.html .

## interface
Voor dit project heb ik het keyboardevent gebruikt. Dit heb ik bijvoorbeeld gedaan met event.key == "ArrowRight", waardoor als je op pijltje rechts klikt, je die functie aanroept.

04: Laat zien wat de huidige staat van het systeem is, toon de relaties aan
- Radio button, hierdoor kun je zien waar je op dat moment bent en welke opties je nog hebt.

08: Je hebt iets gedaan en je kan nog iets, dat je dat toont aan de gebruiker. Toon aan dat je daarna nog iets kan doen of terug kan. 
- Radio button, hierdoor kun je zien waar je op dat moment bent en welke opties je nog hebt. Met pijltjes laat ik aan de gebruiker zien dat je nog iets kan doen en terug kan.

09: hoe iets eruit ziet daaraan moet de gebruiker zien wat hij kan doen. Maak duidelijk dat de gebruiker bijv de keys kan gebruiken om iets te doen, geef bijv een uitlegje
- Pijltjes en uitleg. Ik heb een uitlegje boven de slideshow geplaatst, met wat de gebruiker kan doen. Verder kan de gebruiker aan de pijltjes ppl zien wat hij kan doen.

## code
html:
* Eerst geef ik een titel en een kleine uitleg
* Daarna zet ik de afbeeldingen, met input type radio en label neer
* Als laatste defineer ik de pijltjes aan de zijkant

CSS:
* Ik heb hiermee de pagina gestyled
* Ik heb gebruik gemaakt van display flex, waardoor alles mooi staat
* Verder heb ik de radiobuttons op zijn plek gezet

Javascript:
* Eerst heb ik alle elementen een variabele gegeven
* De slides zet ik in een array, want het is een loop die je gebruikt
* Als er ergens op wordt geklikt wordt er naar gekeken of i kleiner of groter is, waarna de slide wordt getoont
