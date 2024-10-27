const colors = [
    'aqua',
    'darkblue',
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'gray',
    '#C8CE71',
    '#FB7FF5',
    '#571E97', 
];

let count = 0;


function colorchanger() {
    if(count > colors.length +1) {
        let count = 0;
    }
    document.body.style.backgroundColor = colors[count];
    count++;
        
}
    

// let interval;

// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function changeBackgroundColor() {
//     const color = getRandomColor();
//     document.body.style.backgroundColor = color;
//     document.getElementById('color-info').textContent = 'Background Color: ' + color;
// }

// function startChanging() {
//     interval = setInterval(changeBackgroundColor, 1000);
// }

// function stopChanging() {
//     clearInterval(interval);
// }

// // Start changing colors as soon as the page loads
// startChanging();

