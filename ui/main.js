console.log('Loaded!');


var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
var img= document.getElementById('pic');
img.onclick=function() {
    var interval = setInterval(moveRight,10);
};