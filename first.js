/* create divs with button: */
let createDivBtn = document.getElementById('createDiv');
let containerDiv = document.getElementById('containerDiv');

createDivBtn.addEventListener('click', createDiv);



function createDiv () {
    //remove children for a new prompt number when button is clicked
    while (containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.firstChild);
      }
    let divNumber = prompt("How many divs do you want in a single line?", 0);
    console.log(divNumber);

    let divSize = calculateDivSize(divNumber);

    for (let i=0; i<divNumber**2; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'individualDivs');
        newDiv.textContent = "Hi";
        //assign the index of an array as the size property of an element:
        newDiv.style.width = divSize[0] +'px';
        newDiv.style.height = divSize[1]+'px';
        containerDiv.appendChild(newDiv);
    }
}

// calculate the sizes of divs

function calculateDivSize (divNumber) {
    let divWidth = 480/divNumber;
    let divHeight= 480/divNumber;
    return [divWidth, divHeight];
}