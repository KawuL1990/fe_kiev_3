function showArr() {
  var arr = ['Apple', 'Orange', 'Banana', 'Nuts'];
  var p = document.getElementById('new');

  for (var i = 0; i < arr.length; i++) {
    p.innerHTML = arr;
  }
}

function getNewElement() {
  var arr = ['Apple', 'Orange', 'Banana', 'Nuts'];
  var index = document.getElementById('index').value;
  var value = document.getElementById('value').value;
  var test = document.getElementById('new_2');

  arr[index] = value;

  test.innerHTML = arr;
}

function getPop() {
  var arr = ['Apple', 'Orange', 'Banana', 'Nuts'];

  test = document.getElementById('new_3');
  arr.pop();
  test.innerHTML = arr;
}

function getShift() {
  var arr = ['Apple', 'Orange', 'Banana', 'Nuts'];

  test = document.getElementById('new_4');
  arr.shift();
  test.innerHTML = arr;
}

function getPush() {
  var arr = ['Apple', 'Orange', 'Banana', 'Nuts'];
  var items = document.getElementById('items').value;

  test = document.getElementById('new_5');
  arr.push(items);
  test.innerHTML = arr;
}

function getUnshift() {
  var arr = ['Apple', 'Orange', 'Banana', 'Nuts'];
  var items = document.getElementById('val').value;

  test = document.getElementById('new_6');
  arr.unshift(items);
  test.innerHTML = arr;
}
