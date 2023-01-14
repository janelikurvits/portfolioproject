let itemOne = document.getElementById('portfoliotext');
let changeArrowPosition = function(){
    itemOne.innerHTML = 'Check out my work  ↓';
}

let changeBackArrow = function (){
    itemOne.innerHTML = 'Check out my work →';
}

itemOne.onmouseover = changeArrowPosition;
itemOne.onmouseout = changeBackArrow;
