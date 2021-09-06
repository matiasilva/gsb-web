// simple implementation of countdown timer

const targetDate = new Date(2021, 10, 4); // month is 0-indexed
const timerElts = ["timerDays", "timerHours", "timerMinutes", "timerSeconds"].map((val) => document.getElementById(val));

const ONESECOND = 1000;
const ONEMINUTE = ONESECOND * 60;
const ONEHOUR = ONEMINUTE * 60;
const ONEDAY = ONEHOUR * 24;


const displayTimer = diff => {
    let cascadingDiff = diff;
    let result = Array.from([ONEDAY, ONEHOUR, ONEMINUTE, ONESECOND], val => {
        let tempVal = Math.floor(cascadingDiff / val)
        cascadingDiff -= tempVal * val;
        return tempVal;
    });

    timerElts.forEach((elt, index) => { elt.innerText = result[index] });
};

const calculateTimer = () => {
    const today = new Date();
    const diff = targetDate - today;
    displayTimer(diff);
};

calculateTimer();
const intervalTimer = setInterval(calculateTimer, 1000);

