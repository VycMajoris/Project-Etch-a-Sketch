/* create divs with button: */
let createDivBtn = document.getElementById('createDiv');

let containerDiv = document.getElementById('containerDiv');
let hover = document.getElementById('individualDivs');
let hoverOnContainer = document.getElementById('containerDiv');

let createFirstIndividualDiv = document.createElement('div');
createDiv.id ='individualDivs';
containerDiv.appendChild(createFirstIndividualDiv);
console.log(createFirstIndividualDiv.id);


hoverOnContainer.addEventListener('mouseover', hoverOnContainerDiv);
createDivBtn.addEventListener('click', createDiv);

hover.addEventListener('mouseover' , hoverEffect);


function createDiv () {


    //remove children when button is clicked for a new prompt number 
    while (containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.firstChild);
      }
    let divNumber = prompt("How many divs do you want in a single line?", 0);
    

    let divSize = calculateDivSize(divNumber);

    for (let i=0; i<divNumber**2; i++) {
        let newDiv = document.createElement('div');
        newDiv.id = 'individualDivs';
        newDiv.textContent = "Hiya";
        //assign the index of an array as the size property of an element:
        newDiv.style.width = divSize[0] +'px';
        newDiv.style.height = divSize[1]+'px';
        newDiv.style.display= 'inline';
        containerDiv.appendChild(newDiv);
    }
}

// calculate the sizes of divs

function calculateDivSize (divNumber) {
    let divWidth = 640/divNumber;
    let divHeight= 640/divNumber;
    return [divWidth, divHeight];
}

function hoverOnContainerDiv (e) {
    hoverOnContainer.style.backgroundColor = 'rgb(255,255,255)';
} 

// hover effect

function hoverEffect (e) {
    //e.stopImmediatePropagation();

    let redValue = Math.floor(Math.random() * 255);
    let greenValue = Math.floor(Math.random() * 255);
    let blueValue = Math.floor(Math.random() * 255);
    let rgbValues = [redValue, greenValue, blueValue].join();
    rgbValues = 'rgb' + '(' + rgbValues + ')';
    console.log(rgbValues);
    console.log(e.target);
    e.target.style.backgroundColor = rgbValues;
    e.target.textContent = "hello";
    

}

function hoverTest () {
    console.log("test passed");
}
