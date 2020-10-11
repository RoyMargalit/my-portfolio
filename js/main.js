'use strict'
console.log('Starting up');
var gProj = [
    {
        id: 'mineSweeper',
        name: 'Mine Sweeper',
        title: 'Minesweeper is a single-player puzzle video game.',
        desc: 'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. The game originates from the 1960s, and has been written for many computing platforms in use today. It has many variations and offshoots.',
        url: 'projs/mines\ css/index.html',
        publishedAt: 'nan',
        labels: ['matrixes', 'keyboard events'],
        modal:1




    },
    {
        id: 'touchNums',
        name: 'Touch the nums',
        title: 'This is a game you need to count until 16 to win',
        desc: 'he 1960s, and has been written for many computing platforms in use today. It has many variations and offshoots.',
        url: 'projs/touch\ the\ num\ css/index.html',
        publishedAt: 'nan',
        labels: ['matrixes', 'keyboard events'],
        modal:2



    },
    {
        id: 'guessMe',
        name: 'Guess ME',
        title: 'This is a game you need to count until 16 to win',
        desc: 'he 1960s, and has been written for many computing platforms in use today. It has many variations and offshoots.',
        url: 'projs/GuessMe-Ex-startHere-1.1/index.html',
        publishedAt: 'nan',
        labels: ['matrixes', 'keyboard events'],
        modal:3,
    },
]
function renderPortfolio() {
    var strHtml = ''
    // strHtml = `<div class="col-md-4 col-sm-6 portfolio-item">
    // <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
    //   <div class="portfolio-hover">
    //   <div class="portfolio-hover-content">
    //   <i class="fa fa-plus fa-3x"></i>
    //   </div>
    //   </div>`
    gProj.forEach(function (proj) {
        strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.modal}">
          <div class="portfolio-hover">
          <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
          </div>
          </div>
          <img class="img-fluid" src="img/renderportfolio/${proj.id}.jpg" alt="">
          </a>
          <div class= "portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
          </div>
          </div> `
        return strHtml
    })
    var elPortfolio = document.querySelector('.container-portfolio .row')
    elPortfolio.innerHTML += strHtml
}

renderPortfolio()


function onShowProj(projNum){
    gProj.forEach(function(proj){
        if(projNum===proj.modal){
            window.open(`${proj.url}`)

            console.log(projNum)
        }

    })
    console.log(gProj)
}

function onContact(){
    var email = document.getElementById('exampleInputEmail1').value
    console.log(email)
    var subject = document.getElementById('exampleInputSubject').value
    console.log(subject)
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=me@example.com&su=${subject}&body=BODY&bcc=someone.${email}@example.com&tf=1`)
    
}


// function onAddCar() {
//     var elVendor = document.querySelector('.add-car select[name=vendor]');
//     var elSpeed = document.querySelector('.add-car input[name=maxSpeed]');
//     var vendor = elVendor.value;
//     var speed = elSpeed.value;
//     addCar(vendor, speed)
//     elVendor.value = '';
//     elSpeed.value = '';
//     renderCars()

//     <input type="text" name="maxSpeed" placeholder="Max Speed">
// }