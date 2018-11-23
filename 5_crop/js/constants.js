import { startDate, endDate } from './helpers';


export const currency = '145'; // USD: 145, EUR: , RUR: 
export const url = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currency}?startDate=${startDate}&endDate=${endDate}`;