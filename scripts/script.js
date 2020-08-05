// Random Practise code:-
// const number = document.getElementById('container-one-number-id');
// number.innerHTML = Math.random();

// document.getElementById('container-one-number-id').innerText = Math.random();
// document.getElementsByClassName('container-one-number')[0].innerHTML = Math.random() * 212;



//---------------------------------------------------------------------------------------------------------


//Ishaan's code:-

// For container-one
const containerOneNumber = document.getElementById('container-one-number-id'); // container-one-number-id is for number in container-one
containerOneNumber.innerText = Math.floor(Math.random()*100);

// For container-two
const numberToBeFactorised = parseInt(containerOneNumber.innerText); // making a copy kinda thing

const classNumbers = document.getElementsByClassName('number'); // all the container two numbers have class 'number'

const checkFactorial = () => {
    for(let updateNumber = 0; updateNumber < classNumbers.length ; updateNumber++){
        classNumbers[updateNumber].innerText  = Math.floor(Math.random()*10);

        const factorNumbers = parseInt(classNumbers[updateNumber].innerText);

        if (numberToBeFactorised % factorNumbers === 0){
            classNumbers[updateNumber].classList.add('green');
        }
        else{
            classNumbers[updateNumber].classList.add('red');
        }
        
    }
}

checkFactorial();



//---------------------------------------------------------------------------------------------------------


//Aniruddha's code:-

/* 
 const numberElem = document.getElementsByClassName('number')[0];
 const factorialContainer = document.getElementsByClassName('container')[1];

 const displayRandomNumber = () => {
     const number = Math.floor((Math.random() * 100) + 1);
     numberElem.innerText = number;
 }

 const checkIfFactorial = (event) => {
     const span = event.target;
     const innerText = span.innerText;
     const factorial = parseInt(innerText);
     if(parseInt(numberElem.innerText) % factorial === 0) {
         span.classList.add('green');
     } else {
         span.classList.add('red');
     }
 }

 const displayRandomFactorials = () => {
     for(let i = 0; i < 10; i++) {
         const factorial = Math.floor((Math.random() * 50) + 1);
         const factorialSpan = document.createElement('span');

         factorialSpan.innerText = factorial;
         factorialSpan.classList.add('factor')
         factorialSpan.addEventListener('click', checkIfFactorial);

         factorialContainer.appendChild(factorialSpan);
     }
 }


 displayRandomNumber();
 displayRandomFactorials();
 */




//---------------------------------------------------------------------------------------------------------

// Random Practise code:-

// putNumbers = () => {
//     const updateNumber = Math.floor(Math.random()*112);
//     return updateNumber;
// }

// classNumbers.innerText = putNumbers();


// for (const updateNumber of classNumbers) {
           
            

//             if (numberToBeFactorised % updateNumber === 0){
//                 updateNumber.classList.add('red');
//             }
//             else{
//                     updateNumber.classList.add('green');
//                 }
    
// }


// classNumbers[0].innerText  = Math.floor(Math.random()*11);
// classNumbers[1].innerText  = Math.floor(Math.random()*12);
// classNumbers[2].innerText  = Math.floor(Math.random()*13);
// classNumbers[3].innerText  = Math.floor(Math.random()*14);
// classNumbers[4].innerText  = Math.floor(Math.random()*15);
// classNumbers[5].innerText  = Math.floor(Math.random()*16);
// classNumbers[6].innerText  = Math.floor(Math.random()*17);
// classNumbers[7].innerText  = Math.floor(Math.random()*18);
// classNumbers[8].innerText  = Math.floor(Math.random()*19);
// classNumbers[9].innerText  = Math.floor(Math.random()*20);
// classNumbers[10].innerText  = Math.floor(Math.random()*21);





