'use strict'
console.log('Starting up');

function init() {
    renderPortfolio()
}

function renderPortfolio() {
    var projects=getProj()
    var strHtml = ''
    projects.forEach(function (proj) {
        strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="renderModal()" href="#portfolioModal${proj.modal}">
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
    return elPortfolio.innerHTML += strHtml
}

function renderModal() {
    var projects=getProj()
    var strHtml = ''
    projects.forEach(function (proj) {
        console.log('proj', proj)
        strHtml += `<div class="portfolio-modal modal fade" id="portfolioModal${proj.modal}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img class="img-fluid d-block mx-auto" src="img/renderportfolio/${proj.id}.jpg" alt="">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${proj.publishedAt} </li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                    </ul>
                    <button class="btn btn-proj" onclick="onShowProj(${proj.modal})" type="button">
                      <i class="fa fa-times"></i>
                      Show Me!</button>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    `
    return strHtml
    })
    var elContainer = document.querySelector('.portfolio-container')
    elContainer.innerHTML += strHtml
}

function onShowProj(projNum) {
    var projects=getProj()
    projects.forEach(function (proj) {
        if (projNum === proj.modal) {
            window.open(`${proj.url}`)

            console.log(projNum)
        }
    })
}

function onContact() {
    var email = document.getElementById('exampleInputEmail1').value
    console.log(email)
    var subject = document.getElementById('exampleInputSubject').value
    console.log(subject)
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=roy4499@gmail.com&su=${subject}&body&bcc&tf=1`)
}