const root = _id('root');
const rows = document.querySelectorAll('.row');

function _id(id) {
    return document.getElementById(id);
}

function _qs(selector) {
    return document.querySelector(selector);
}

function hideRows() {
    _qs('.step1').classList.add('d-none');
    _qs('.step2').classList.add('d-none');
    _qs('.step3').classList.add('d-none');
    _qs('.step4').classList.add('d-none');
    _qs('.finish').classList.add('d-none');
    _qs('#finish').classList.add('d-none');
}

let state = {}

setState({
    step: 1,
    make: null,
    model: null,
    fuel: null,
    transmission: null,
    cars: []
});

function setState(newState) {
    state = { ...state, ...newState }
    console.log(state.step);
    render();
}

const newCar = {
    make: null,
    model: null,
    fuel: null,
    transmission: null,
}

_id('next').addEventListener('click', next);
_id('back').addEventListener('click', back);
_id('finish').addEventListener('click', finish);

function next() {
    setState({ step: state.step + 1 });
}

function back() {
    setState({ step: state.step - 1 });
}

function finish() {
    setState({ step: 1, cars: [...state.cars, newCar] });
}

function render() {
    if (state.step === 1) {
        hideRows();
        _qs('#back').classList.add('d-none');
        _qs('.step1').classList.remove('d-none');
        _qs('.buttons').classList.remove('d-none');
        _qs('#next').classList.remove('d-none');
    }

    if (state.step === 2) {
        hideRows();
        _qs('#back').classList.remove('d-none');
        _qs('.step2').classList.remove('d-none');
        _qs('.buttons').classList.remove('d-none');
        _qs('#next').classList.remove('d-none');
    }

    if (state.step === 3) {
        hideRows();
        _qs('.step3').classList.remove('d-none');
        _qs('.buttons').classList.remove('d-none');
        _qs('#next').classList.remove('d-none');
    }

    if (state.step === 4) {
        hideRows();
        _qs('.step4').classList.remove('d-none');
        _qs('.buttons').classList.remove('d-none');
        _qs('#next').classList.remove('d-none');
    }

    if (state.step === 5) {
        hideRows();
        _qs('.step5').classList.remove('d-none');
        _qs('.finish').classList.remove('d-none');
        _qs('#next').classList.add('d-none');
        _qs('#finish').classList.remove('d-none');
    }
};