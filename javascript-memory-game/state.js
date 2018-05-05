// State ------------------------------------------------------------

var state = {
    isRulesShown: false,
    currentPage: 'home',
    color: 'red',
    cards: [1, 1, 2, 2, 3, 3, 4, 4],
    difficulty: 'easy',
    difficultyArrays: {
        easy: [1, 1, 2, 2, 3, 3, 4, 4],
        normal: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
        hard: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12]
    }
}

function setState(newState) {
    state = { ...state, ...newState };
    console.log(state);
    render();
}

// State end --------------------------------------------------------