const facts = [
    "Japonia ma bardzo rozbudowana siec szybkich pociagow Shinkansen.",
    "Wiosna popularnym zwyczajem jest hanami, czyli ogladanie kwitnacych wisni.",
    "Gora Fuji ma 3776 metrow wysokosci i jest najwyzszym szczytem Japonii.",
    "Tokio jest jednym z najwiekszych obszarow miejskich na swiecie.",
    "W Japonii duza wage przyklada sie do punktualnosci i kultury osobistej."
];

const factButton = document.querySelector("#fact-button");
const factOutput = document.querySelector("#fact-output");
const todayDate = document.querySelector("#today-date");
let lastFactIndex = -1;

function showTodayDate() {
    const today = new Date();
    todayDate.textContent = today.toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function showRandomFact() {
    let randomIndex = Math.floor(Math.random() * facts.length);

    while (randomIndex === lastFactIndex) {
        randomIndex = Math.floor(Math.random() * facts.length);
    }

    lastFactIndex = randomIndex;
    factOutput.textContent = facts[randomIndex];
}

showTodayDate();
showRandomFact();
factButton.addEventListener("click", showRandomFact);
