function getRateDynamicRequest() {
  const currency = '145'; // USD: 145, EUR: , RUR: 
  const startDate = getDates().startDate;
  const endDate = getDates().endDate;
  const NBRB_URL = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currency}?startDate=${startDate}&endDate=${endDate}`;

  fetch(NBRB_URL)
    .then(res => res.json())
    .then(data => drawChart(data))
    .catch(error => console.log('Error: ', error));
}