'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  console.log('Started...');
  createQuestsTree();
}

function onStartGuessing() {
  var startSection = $('.game-start')
  var startBtn = $('.btn-start')
  startBtn.click(startSection.hide())
  $('.quest').show()
  renderQuest();
}

function renderQuest() {
  var currQuestion = getCurrQuest()
  $('.quest h2').text(currQuestion.txt)
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  var restartBtn = $('.restart-btn')
  console.log(ev.data.ans)
  if (isChildless(getCurrQuest())) {
    console.log('CHILDLESS')
    if (res === 'yes') {
      alert('Yes, I knew it!');
      onRestartGame()
    } else {
      alert('I dont know...teach me!');
      $('.quest').hide()
      $('.new-quest').show()
    }
  } else {
    gLastRes = res
    moveToNextQuest(res)
    renderQuest()
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();
  addGuess(newQuest, newGuess, gLastRes)
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.game-start').show();
  $('.quest').hide();
  restartGame()
  init()
  gLastRes = null;
}


