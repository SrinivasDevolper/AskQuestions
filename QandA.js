let descritionID = document.getElementById("descritionID");
let cardsContainer = document.querySelectorAll('.card-cont .first-card ');
cardsContainer.forEach((cards) => {
    let answers = cards.querySelector('.cont-visible');
    let btns = cards.querySelector(' .cont .icon-vis');
    btns.onclick = () => {
        answers.classList.toggle('cont-dis');

    };
});