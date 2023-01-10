let itemOne = document.getElementById('portfolio-button');
function changeArrowPosition(){
    itemOne.innerHTML = 'Check out my work ↓';
}

itemOne.addEventListener('onmouseover', changeArrowPosition);
itemOne.removeEventListener('mouseout', changeArrowPosition);
