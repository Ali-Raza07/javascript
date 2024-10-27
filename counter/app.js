
let count = 0;
function Increase() {
    document.querySelector('h2').style.color = 'blue';
    count++;
    document.querySelector('h2').innerHTML = count;
}

function Decrease() {
    count--;
    document.querySelector('h2').style.color = 'red';
    document.querySelector('h2').innerHTML = count;
}


function Reset() {
    document.querySelector('h2').style.color = 'green';
    count = 0;
    document.querySelector('h2').innerHTML = count;
    if(count > -0) {
    count = -0;
    document.querySelector('h2').innerHTML = count;
}
}