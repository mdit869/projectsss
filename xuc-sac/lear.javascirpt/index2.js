var container = document.getElementById('container');
var borderArray = ['50%', '0'];
var blurArray = ['0', '5px', '2px', '7px'];
var colorArray =['red', '#3d37af', 'yellow','blue','#d01635', 'pink', '#0f0'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 150;

function fullname(){
    for(var i =0 ; i < count; i++){
        var randomleft =Math.floor( (Math.random()*width));
        var randomtop =Math.floor( (Math.random()*height));
        var color =Math.floor( Math.random()*7)
        var border = Math.floor(Math.random() * 2);
        var widthElenmt = Math.floor(Math.random() * 5) + 5;
        var blur = Math.floor(Math.random() * 4);
        var timaAnimasin = Math.floor(Math.random() * 6) + 9;


        var div= document.createElement('div')
        div.style.backgroundColor = colorArray[color]
        div.style.position = 'absolute'
        div.style.width = widthElenmt + 'px';
        div.style.height = widthElenmt + 'px';
        div.style.marginLeft = randomleft + 'px';
        div.style.marginTop = randomtop + 'px';
        div.style.borderRadius = borderArray[border];
        div.style.filter = 'blur(' + blurArray[blur] +')';
        div.style.animation = 'move ' + timaAnimasin + 's ease-in infinite';
        container.appendChild(div);
    }
}
fullname()
