
let titleCount = 1;
const cards = document.querySelectorAll('.card');
//console.log(cards)
for (const card of cards) {
    card.addEventListener('click', function () {

        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('span').innerText

        const titleContainer = document.getElementById('title-container');

        const p = document.createElement("p");
        p.innerText =titleCount + ". " + title;
        titleContainer.appendChild(p)
        titleCount = titleCount + 1;
        console.log();
    });
}
