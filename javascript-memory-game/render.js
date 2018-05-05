var root = document.getElementById('root');

function render() {
    root.innerHTML = `
        <header>
            <div id="home">&#x27AA;</div>
            <div class="page-title">
                ${state.currentPage === 'game' || state.currentPage === 'you-won' ? `
                <div id="timer">
                    <span class="minutes">00</span> :
                    <span class="seconds">00</span> :
                    <span class="centiseconds">00</span>
                </div>
                ` : ''}
                ${state.currentPage === 'home' ? 'Match-Match Game' : ''}
                ${state.currentPage === 'rules' ? 'Rules' : ''}
                ${state.currentPage === 'settings' ? 'Settings' : ''}
            </div>
        </header>
        <section>
            ${state.currentPage === 'home' ? `
            <div class="home">
                <div class="actions">
                    <button id="game">Start Game</button>
                    <button id="rules">Rules</button>
                    <button id="settings">Settings</button>
                </div>
            </div>
            ` : ''}

            ${state.currentPage === 'game' ? `
            <div class="game ${state.difficulty}"></div>
            ` : ''}

            ${state.currentPage === 'settings' ? `
            <div class="settings">
                <h2>Difficulty</h2>
                <div class="actions difficulty-actions">
                    <button id="easy" class="${state.difficulty === 'easy' ? 'active' : ''}">Easy</button>
                    <button id="normal" class="${state.difficulty === 'normal' ? 'active' : ''}">Normal</button>
                    <button id="hard" class="${state.difficulty === 'hard' ? 'active' : ''}">Hard</button>
                </div>
                <h2>Card back</h2>
                <div class="actions color-actions">
                    <img src="images/red.png" id="red" class="${state.color === 'red' ? 'active' : ''}">
                    <img src="images/green.png" id="green" class="${state.color === 'green' ? 'active' : ''}">
                    <img src="images/blue.png" id="blue" class="${state.color === 'blue' ? 'active' : ''}">
                </div>
            </div>
            
            ` : ''}

            ${state.currentPage === 'rules' ? `
            <div class="rules">
                <h2>Hello!</h2>
                <p> This is the match card memory game.</p>
                <h2>How to play</h2>
                <p>Memory is the counter game where the object is to find pairs.</p>
                <p>When the game begins, all pictures are hidden.</p>
                <h2>To play</h2>
                <ol>
                    <li>Select two cards to try match the picture.</li>
                    <li>If you match the pictures you can go againe.</li>
                    <li>If they don't match it is the computer turn them.</li>
                    <li>The player who finds all pairs wins!</li>
                    <li>Have fun!</li>
                </ol>
            </div>
            ` : ''}

            ${state.currentPage === 'you-won' ? `
            <div class="you-won">
                <h1>Congratulations! You Won!</h1>
                <p>Your time is 00:00:00.</p>
                <button id="game">Start Game</button>
            </div>
            ` : ''}

        </section>
`};