const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1 = document.querySelector("#p1Score");
const p2 = document.querySelector("#p2Score");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = parseInt(document.querySelector("#playTo").value);
let score1 = 0;
let score2 = 0;
let isGameOver = false;


p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        score1 += 1;
        if (score1 === winningScore) {
            isGameOver = true;
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1.textContent = score1;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        score2 += 1;
        if (score2 === winningScore) {
            isGameOver = true;
            p2.classList.add('has-text-success');
            p1.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2.textContent = score2;
    }
})

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('has-text-success', 'has-text-danger');
    p2.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}