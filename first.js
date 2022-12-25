/* create divs with button: */
let createDivBtn = document.getElementById('createDiv');

let container = document.getElementById('containerDiv');

const hoverOnContainer = document.getElementById('containerDiv');

/* let createFirstIndividualDiv = document.createElement('div');
createDiv.id ='individualDivs';
containerDiv.appendChild(createFirstIndividualDiv); 
console.log(createFirstIndividualDiv.id); */


//hoverOnContainer.addEventListener('mouseover', hoverOnContainerDiv);
createDivBtn.addEventListener('click', createDiv);


//const hover = document.getElementById('gridDivs');
//hover.addEventListener('mouseover', hoverEffect);

// hover effect
function hoverEffect (e) {
    //e.stopPropagation();
    
    
    let redValue = Math.floor(Math.random() * 255);
    let greenValue = Math.floor(Math.random() * 255);
    let blueValue = Math.floor(Math.random() * 255);
    let rgbValues = [redValue, greenValue, blueValue].join();
    rgbValues = 'rgb' + '(' + rgbValues + ')';
    
    e.target.style.backgroundColor = rgbValues;
    
}


function createDiv (e) {

    //remove children when button is clicked for a new prompt number 

     while (containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.firstChild);
      } 

    let divNumber = prompt("How many divs do you want in a single line? (0-50)", 0);

    while (true) {
    
    if (divNumber<=50) {
    
    let divSize = calculateDivSize(divNumber);

    for (let i=0; i<divNumber**2; i++) {
        
        let newDiv = document.createElement('div');
        
        //assign the index of an array as the size property of an element:
        newDiv.style.width = divSize[0] +'px';
        newDiv.style.height = divSize[1]+'px';
        //newDiv.style.display= 'inline';
        container.appendChild(newDiv);
        newDiv.id = 'gridDivs';
        newDiv.style.borderStyle = 'solid';
        newDiv.style.borderWidth = '1px';
        newDiv.addEventListener('mouseover', hoverEffect);
        

    } 
    break;
} else {
    divNumber = prompt("How many divs do you want in a single line? (0-50)", 0);
}

    
} 
}


// calculate the sizes of divs

function calculateDivSize (divNumber) {
    let divWidth = 640/divNumber;
    let divHeight= 640/divNumber;
    return [divWidth, divHeight];
}

/* function hoverOnContainerDiv (e) {
    hoverOnContainer.style.backgroundColor = 'rgb(255,255,255)';
    
}  */
