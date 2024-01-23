
const display = document.querySelector('.display');
const calcu = document.querySelector('.calcu');


function header1(){
    display.value = ''
    calcu.value = ''
}

function header2(){
    calcu.value =eval(display.value)
}



function header3(){
    display.value = display.value.slice( 0, display.value.length - 1)
}



const display1 = document.querySelector('.display1');
const calcu1 = document.querySelector('.calcu1');


function header4(){
    calcu1.value =eval(display1.value)
}
function header5(){
    display1.value = ''
    calcu1.value = ''
}

function header6(){
    display1.value = display1.value.slice( 0, display1.value.length - 1)
}


var container =document.getElementById('container');
// var boderArray = [];
var blurArray = ['1px', '3px', '5px', 0];
var colorArray = ['red', '#3d37af', 'yellow','blue','#d01635', 'pink', '#0f0'];
var  width = document.documentElement.clientWidth;
var  height = document.documentElement.clientHeight;
var cout = 100;

