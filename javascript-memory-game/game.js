// !state.isRulesShown ? setState({ currentPage: 'rules', isRulesShown: true }) : setState({ currentPage: 'home' });
switchPage('home');

document.addEventListener('click', function (e) {

    // console.log(e.target);

    // pages
    if (e.target.id === 'home') { switchPage('home'); stopTimer(); currentTimer = 0; }

    if (e.target.id === 'game') { switchPage('game'); resetTimer(); shuffleCards(); }
    if (e.target.id === 'rules') { switchPage('rules') }
    if (e.target.id === 'settings') { switchPage('settings') }
    // game difficulty
    if (e.target.id === 'easy') { switchDifficulty('easy') }
    if (e.target.id === 'normal') { switchDifficulty('normal') }
    if (e.target.id === 'hard') { switchDifficulty('hard') }
    // cards color
    if (e.target.id === 'red') { setState({ color: 'red' }) }
    if (e.target.id === 'green') { setState({ color: 'green' }) }
    if (e.target.id === 'blue') { setState({ color: 'blue' }) }

    // game
    if (e.target.className === 'card') { cardClick(e) }

});

function switchPage(page) {
    setState({ currentPage: page });
    document.body.className = 'body-' + page;
}

function switchDifficulty(difficulty) {
    setState({ difficulty: difficulty });
    if (state.difficulty === 'easy') { state.cards = state.difficultyArrays.easy }
    if (state.difficulty === 'normal') { state.cards = state.difficultyArrays.normal }
    if (state.difficulty === 'hard') { state.cards = state.difficultyArrays.hard }
}



// Game methods

function cardClick(e) {
    e.target.style.background = 'url(images/' + e.target.dataset.cardValue + '.png)';
    e.target.style.backgroundSize = 'cover';
    e.target.classList.add('selected');

    startTimer();
    checkMatch();
}

function shuffleCards() {
    for (var i = 0; i < state.cards.length; i++) {
        var random = Math.round(Math.random() * i);
        var temp = state.cards[i];
        state.cards[i] = state.cards[random];
        state.cards[random] = temp;
    }

    renderCards();
}

function renderCards() {
    state.cards.map((card, index) => {
        document.querySelector('.game').innerHTML += `
            <div class="card" data-card-value="${card}" style="background: url(images/${state.color}.png); background-size: cover;"></div>
        `;
    });
}

function checkMatch() {
    var selectedCards = document.querySelectorAll('.selected');

    if (selectedCards.length === 2) {

        if (selectedCards[0].dataset.cardValue === selectedCards[1].dataset.cardValue) {

            selectedCards.forEach((card, index) => {
                card.classList.add('matched');
                card.classList.remove('selected');
            });

            checkWin();
        } else {
            setTimeout(() => {
                selectedCards.forEach((card, index) => {
                    card.classList.remove('selected');
                    card.style.background = `url(images/${state.color}.png)`;
                    card.style.backgroundSize = 'cover';
                });
            }, 500);
        }
    }
}

function checkWin() {
    if (document.querySelectorAll('.matched').length === state.cards.length) {
        stopTimer();

        document.querySelector('.game').innerHTML = `
            <div class="you-won">
                <h1>Congratulations! You Won!</h1>
                <button id="game">Start Game</button>
            </div>
        `;
    }
}