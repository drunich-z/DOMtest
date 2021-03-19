const divs = document.querySelectorAll('div');
/*console.log(divs);*/

const orangeBlock = document.querySelector('#orangeBlock');
const purpleBlock = document.querySelector('#purpleBlock');
const coralBlock1 = document.querySelector('#coralBlock1');
const coralBlock2 = document.querySelector('#coralBlock2');


function purpleBlockHandler(){
    console.log(event.target.classList);
    
    /*if (event.target.classList[0] == 'coral-block') {
        event.target.classList.toggle('cadetblue');
    }*/
    (event.target.classList[0] == 'coral-block') && orangeBlock/*event.target*/.classList.toggle('cadetblue');
}



purpleBlock.addEventListener('click', purpleBlockHandler);
/*
function orangeBlockHandler2(){
    console.log('погружение оранжевый блок');
}
function orangeBlockHandler(){
    console.log('всплытие оранжевый блок');
}

function coralBlock2Handler(){
    console.log(event.target);
}

orangeBlock.addEventListener('click', orangeBlockHandler);
orangeBlock.addEventListener('click', orangeBlockHandler2, true);
orangeBlock.addEventListener('click', coralBlock2Handler, true);*/
/*console.log(orangeblock);
console.log(purpleblock);
console.log(coralblock1);
console.log(coralblock2);*/ 

/*console.log(window);
console.log(window.document);*/