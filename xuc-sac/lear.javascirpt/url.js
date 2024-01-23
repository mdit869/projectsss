var container =document.getElementById('container');
// var boderArray = [];
var blurArray = ['1px', '3px', '5px', 0];
var colorArray = ['red', '#3d37af', 'yellow','blue','#d01635', 'pink', '#0f0'];
var  width = document.documentElement.clientWidth;
var  height = document.documentElement.clientHeight;
var cout = 100;

function creaElemnetRandom(){
    for(var i = 0; i < cout; i++){
        var randomleft = Math.floor(Math.random() * width);
        var randomtop = Math.floor(Math.random() * height);
        var color = Math.floor(Math.random() * 7);
        // var boder = Math.floor(Math.random())
        var widthElemt = Math.floor(Math.random() * 5) +5;
        var div = document.createElement('div');
        var blur = Math.floor(Math.random() * 4)
        var timeAnimasiton = Math.floor(Math.random() *6) + 3;

        
        // div.style.backgroundColor = colorArray[color]; 
        div.style.position = 'absolute';
        div.style.filter ='blur(' + blurArray[blur] +')'
        div.style.width = widthElemt + 'px';
        div.style.height = widthElemt + 'px';
        div.style.marginLeft = randomleft + 'px';
        div.style.marginTop = randomtop + 'px';
        div.style.animation = 'move1 '+ timeAnimasiton + 's ease-in infinite';
        var icon = document.createElement('i');
            // icon.classList.add('fa-solid', 'fa-heart','fa-regular');
            icon.classList.add('fa-regular', 'fa-heart');
            icon.style.color = colorArray[color]
            div.appendChild(icon);
        container.appendChild(div);
    }
}

creaElemnetRandom()

