var a = 1;
function slide(n){
    var image = document.getElementById('pic');
    a = a+n;
    if(a>image.length){
        a=1;
        document.getElementById('minImage').src = `${image[a-1].value}`;
    }
    else if(a<=0){
        a = 7;
        document.getElementById('minImage').src = `${image[a-1].value}`;
    }
    else{
        document.getElementById('minImage').src = `${image[a-1].value}`;
    }
}

function slideDrop(){
    var image = document.getElementById('pic');
    document.getElementById('minImage').src = `${image.options[image.selectedIndex].value}`;

}