// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }
  return total;
} // tested

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
} // tested

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
} // tested

function appendDeleteBtn(tr) {
  const newTd = document.createElement('td');
  newTd.classList.add('deleteBtn');
  newTd.innerText = 'X';

  newTd.addEventListener('click', function(e) {
    const row = e.target.closest('tr');

    delete allServers[row.id];
    row.parentNode.removeChild(row);
    updateServerTable();
  });

  tr.append(newTd);
} // tested