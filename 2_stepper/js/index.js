const rootElement = document.getElementById('root');

let state = {
  cars: [
    {
      id: 1, brand: 'moskvich', models: [
        { id: 11, title: '412' },
      ]
    },
  ]
};

function render() {
  rootElement.innerHTML = `
    <div class="container">
      <h1>Choose a car</h1>
      <div class="pages">
        <div class="page1">
        <form>
          <label for="volga">
            <input type="radio" name="volga" id="volga" /> Volga
          </label>
          <label for="moskvich">
            <input type="radio" name="moskvich" id="moskvich" /> Moskvich
          </label>
          <label for="zhiguli">
            <input type="radio" name="zhiguli" id="zhiguli" /> Zhiguli
          </label>
          </form>
        </div>
      </div>
      <div class="buttons">
        <button id="prev" disabled="true">Prev</button>
        <button id="next">Next</button>
      </div>
    </div>
  `;
  console.log(state);
}

render();

function setState(nextState) {
  state = { ...state, ...nextState };
  render();
}

document.addEventListener('click', (e) => {
  // setState({ [e.target.name]: e.target.value });
  if (e.target.name) {
    console.log(e.target.name);
  }
});