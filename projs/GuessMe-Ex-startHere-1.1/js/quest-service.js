const STORAGE_KEY = 'akinatorDB'
var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = _loadFromStorage(STORAGE_KEY);
    console.log(gQuestsTree);
    if (!gQuestsTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        console.log(gQuestsTree)
    }
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    // console.log(node)
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest = gCurrQuest
    gCurrQuest = gCurrQuest[res]
    console.log(gCurrQuest)
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    console.log(gPrevQuest,'gprev')
    // TODO: Create and Connect the 2 Quests to the quetsions 

    // gPrevQuest[lastRes] = createQuest(newQuestTxt);
    var newQuest = createQuest(newQuestTxt);

    //gPrevQuest[lastRes].yes = createQuest(newGuessTxt);
    newQuest.yes = createQuest(newGuessTxt);

    // gPrevQuest[lastRes].no = gCurrQuest;
    newQuest.no = gCurrQuest;

    gPrevQuest[lastRes] = newQuest;
    // gCurrQuest = gQuestsTree;
    console.log(gQuestsTree)
    _saveToStorage(STORAGE_KEY, gQuestsTree)

}

function getCurrQuest() {
    return gCurrQuest
}

function restartGame() {
    gQuestsTree;
    gCurrQuest;
    gPrevQuest = null

}
