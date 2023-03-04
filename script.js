const form = document.getElementById('form');
const year = document.getElementById('year');
const jResult = document.getElementById('j-result');
const gResult = document.getElementById('g-result');


let isValid = false,
	dates;

const paschalFullMoon = {
  '.0': 'A5',
'.052': 'M25',
'.105': 'A13',
'.157': 'A2',
'.210': 'M22',
'.263': 'A10',
'.315': 'M30',
'.368': 'A18',
'.421': 'A7',
'.473': 'M27',
'.526': 'A15',
'.578': 'A4',
'.631': 'M24',
'.684': 'A12',
'.736': 'A1',
'.789': 'M21',
'.842': 'A9',
'.894': 'M29',
'.947': 'A17'
}

const pfmDateForYear = [
  ['M26', 'A2', 'A9', 'A16'],
  ['M27', 'A3 ', 'A10', 'A17'],
  ['M21', 'M28', 'A4', 'A11', 'A18'],
  ['M22', 'M29', 'A5', 'A12'],
  ['M23', 'M30', 'A6', 'A13'],
  ['M24', 'M31', 'A7', 'A14'],
  ['M25', 'A1', 'A8', 'A15']
]

const firstTwoDigitsOfYear = [
  [12, 19, 26, 33],
  [11, 18, 25, 32],
  [10, 17, 24, 31],
  [16, 23, 30],
  [15, 22, 29],
  [14, 21, 28],
  [13, 20, 27]
]

const lastTwoDigitsOfYear = [
  [00, 06, 17, 23, 28, 34, 45, 51, 56, 62, 73, 79, 84, 90],
  [01, 07, 12, 18, 29, 35, 40, 46, 57, 63, 68, 74, 85, 91, 96],
  [02, 13, 19, 24, 30, 41, 47, 52, 58, 69, 75, 80, 86, 97],
  [03, 08, 14, 25, 31, 36, 42, 53, 59, 64, 70, 81, 87, 92, 98],
  [09, 15, 20, 26, 37, 43, 48, 54, 65, 71, 76, 82, 93, 99],
  [04, 10, 21, 27, 32, 38, 49, 55, 60, 66, 77, 83, 88, 94],
  [05, 11, 16, 22, 33, 39, 44, 50, 61, 67, 72, 78, 89, 95]
]


const followingSunday = [
  null,
  [6, 13],
  [5, 12],
  [4, 11, 18],
  [3, 10, 17],
  [2, 9, 16],
  [1, 8, 15],
  [0, 7, 14]
]


function getDates(year) {
  const pfm = (((year / 19) % 1).toString()).slice(1, 5) || '.0'; // '0.947'
  const pfmDate = paschalFullMoon[pfm]; // A17
  const pfmDay = Number(pfmDate.slice(1));
  const pfmMonth = pfmDate[0] === 'M' ? 3 : 4;
  const oldDate = new Date(`${year}-${pfmMonth}-${pfmDay}`);

  let pfmDateForYearResult,
      firstTwo,
      lastTwo,
      daysToAdd,
      newDateDaysToAdd,
      newDate,
      total,
      oldDateFormat,
      newDateFormat;

  for (var i = 0; i < pfmDateForYear.length; i++) {
    if(pfmDateForYear[i].some(pfm => pfm === pfmDate)){
     pfmDateForYearResult = i;
    }
  }

  for (var i = 0; i < firstTwoDigitsOfYear.length; i++) {
    if(firstTwoDigitsOfYear[i].some(digits => digits === Number(year.toString().slice(0, 2)))){
     firstTwo = i;
    }
  }

  for (var i = 0; i < lastTwoDigitsOfYear.length; i++) {
    if(lastTwoDigitsOfYear[i].some(digits => digits === Number(year.toString().slice(2)))){
     lastTwo = i;
    }
  }

  total = pfmDateForYearResult + firstTwo + lastTwo;

  for (var i = 1; i < followingSunday.length; i++) {
    if(followingSunday[i].some(days => days === total)){
     daysToAdd = i;
    }
  }

  oldDate.setDate(oldDate.getDate() + daysToAdd);

  switch(true) {
  case year < 1582:
      newDateDaysToAdd = 0;
      break;
    case year >= 1582 && year <= 1699:
      newDateDaysToAdd = 10;
      break;
    case year >= 1700 && year <= 1799:
      newDateDaysToAdd = 11;
      break;
    case year >= 1800 && year <= 1899:
      newDateDaysToAdd = 12;
      break;
    case year >= 1900 && year <= 2099:
      newDateDaysToAdd = 13;
      break;
    case year >= 2100 && year <= 2199:
      newDateDaysToAdd = 14;
      break;
    case year >= 2200 && year <= 2299:
      newDateDaysToAdd = 15;
      break;
    case year >= 2300 && year <= 2499:
      newDateDaysToAdd = 16;
      break;
    case year >= 2500 && year <= 2599:
      newDateDaysToAdd = 17;
      break;
    case year >= 2600 && year <= 2699:
      newDateDaysToAdd = 18;
      break;
    case year >= 2700 && year <= 2899:
      newDateDaysToAdd = 19;
      break;
    case year >= 2900 && year <= 2999:
      newDateDaysToAdd = 20;
      break;
    case year >= 3000 && year <= 3099:
      newDateDaysToAdd = 21;
      break;
    case year >= 3100 && year <= 3299:
      newDateDaysToAdd = 22;
      break;
    case year >= 3300 && year <= 3399:
      newDateDaysToAdd = 23;
      break;
      case year === 3400:
      newDateDaysToAdd = 24;
      break;  
  }

  
  if (year >= 1582) {
	  newDate = new Date(oldDate);
	  newDate.setDate(oldDate.getDate() + newDateDaysToAdd);
	  newDateFormat = `${newDate.getDate()}. ${newDate.getMonth() + 1}. ${newDate.getFullYear()}`
  } else {
  	newDateFormat = "-- -- ----"
  }

  oldDateFormat = `${oldDate.getDate()}. ${oldDate.getMonth() + 1}. ${oldDate.getFullYear()}`

  dates = { oldDate: oldDateFormat, newDate: newDateFormat };
}

function setDates() {
	jResult.innerText = dates.oldDate;
	gResult.innerText = dates.newDate;
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    isValid = form.checkValidity();
    // Submit Data if Valid
    if(isValid && year.value) {
        getDates(Number(year.value));
        setDates();
    }
}


// Event Listener
form.addEventListener('submit', processFormData);