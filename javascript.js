let itemOne = document.getElementById('portfolio-button');
function changeArrowPosition(){
    itemOne.innerHTML = '<a href="#portfolio">Check out my work ↓</a>';
}

itemOne.addEventListener('onmouseover', changeArrowPosition);
itemOne.removeEventListener('mouseout', changeArrowPosition);
