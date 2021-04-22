const btnDateCalcSelection = document.querySelector('.datecalc-btn');
const btnTimerSelection = document.querySelector('.timer-btn');
const datecalcApp = document.querySelector('.datecalc-app');
const timerApp = document.querySelector('.timer-app');

btnTimerSelection.addEventListener('click', () => {
    datecalcApp.style.display = 'none';
    timerApp.style.display = 'block';
});

btnDateCalcSelection.addEventListener('click', () => {
    datecalcApp.style.display = 'block';
    timerApp.style.display = 'none';
});