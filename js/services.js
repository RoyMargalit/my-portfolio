var gProj = [
    {
        id: 'mineSweeper',
        name: 'Mine Sweeper',
        title: 'Minesweeper is a single-player puzzle video game.',
        desc: 'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. The game originates from the 1960s, and has been written for many computing platforms in use today. It has many variations and offshoots.',
        url: 'projs/mines\ css/index.html',
        publishedAt: 'nan',
        labels: ['matrixes', 'keyboard events'],
        modal: 1,

    },
    {
        id: 'touchNums',
        name: 'Touch the nums',
        title: 'This is a game you need to count until 16 to win',
        desc: 'he 1960s, and has been written for many computing platforms in use today. It has many variations and offshoots jofh;aioh fdkhs;goj dkghaskfna/kln ewdghasgh hsg;ij lasdgh jes hdfkj a/lja/rg tojrgo jrgp rogj op.',
        url: 'projs/touch\ the\ num\ css/index.html',
        publishedAt: 'nan',
        labels: ['matrixes', 'keyboard events'],
        modal: 2

    },
    {
        id: 'guessMe',
        name: 'Guess ME',
        title: 'Guess who and add questions!',
        desc: `'Akinator's all-consuming passion is trying to guess characters by asking questions.
        To play with him, think of a character, real or fictional, keep it well in mind and then click on the
        menu "play > characters".
        Akinator will then proceed to ask you a series of questions that you'll have to answer as truthfully
        as possible. After this series of questions, he will tell you what you'`,
        url: 'projs/GuessMe-Ex-startHere-1.1/index.html',
        publishedAt: 'nan',
        labels: ['matrixes', 'keyboard events'],
        modal: 3,
    },
]



function getProj(){
    return gProj
}
function getProjectById(id) {
    return gProjects.find(function (project) {
        return project.id === id;
    })
}