'use strict'
console.log('touch nums')

var gSize = 4
var gNums = []
var gTimerInterval;
var gSecond = 1
var gMinute = 0;

var cellPress = 1

function init() {
    cellPress = 1
    gNums = createNums()
    renderNums()
}
function chooseLevel(level) {
    // if (level === 1) gSize = 4
    // if (level === 2) gSize = 5
    // if (level === 3) gSize = 6
    gSize = level
    // if(gSize!==4)cellPress=1
    init()
}
function renderNums() {
    var strHTML = '';
    for (var i = 0; i < gSize; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < gSize; j++) {
            var cell = gNums.pop()
            var className = `cell cell-${i}-${j}`
            strHTML += `<td onclick="cellClicked(this,${i},${j})" 
            class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}

function cellClicked(elCell, i, j) {
    
    if(+elCell.innerText === 1)startTimer()
    var elModal = document.querySelector('.modal')
    console.log(cellPress)

    if (elCell.innerText === cellPress + '') {
        elCell.classList = 'cell-touched'
        if (cellPress >= gSize ** 2) {
            elModal.style.display = 'block'
            clearInterval(gTimerInterval)
        }
        cellPress++
        return
    }
}

function startTimer() {
    var timer = document.querySelector(".timer");
    gTimerInterval = setInterval(function () {
        timer.innerHTML = gMinute + "mins " + gSecond + "secs";
        gSecond++;
        if (gSecond === 60) {
            gMinute++;
            gSecond = 0;
        }
        // if (gMinute === 60) {
        //     hour++;
        //     gMinute = 0;
        // }
    }, 1000);
}
function closeModal() {
    // Todo: hide the modal
    var elModal = document.querySelector('.modal');
    elModal.style.display = 'none';
}
function createNums() {
    var nums = []
    for (var i = 0; i < gSize * gSize; i++) {
        nums.push((i + 1));
    }
    shuffle(nums);
    return nums;
}
console.log(createNums())

function shuffle(items) {
    var randIdx, keep, i;
    for (i = items.length - 1; i > 0; i--) {
        randIdx = getRandomIntInclusive(0, items.length - 1);
        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

