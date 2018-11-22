function getRateDynamic() {
  const currency = '145'; // USD: 145
  const startDate = '2018-11-14';
  const endDate = '2018-11-23';
  const NBRB_URL = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currency}?startDate=${startDate}&endDate=${endDate}`;

  fetch(NBRB_URL)
    .then(res => res.json())
    .then(data => drawChart(data))
    .catch(error => console.log('Catch Error: ', error));
}