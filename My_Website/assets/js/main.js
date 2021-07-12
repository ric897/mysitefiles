const nice = document.querySelector('#nice');
const menu = document.querySelector('#menu');
const matchResult = window.matchMedia("(max-width: 767px)");
const letsGo = document.querySelector('#letsGo');
const yessuh = document.querySelector('#yessuh');
const ye = document.querySelector('#ye');
const bet = document.querySelector('#bet');
const lit = document.querySelector('#lit');
const yer = document.querySelector('#yer');
const turnUp = document.querySelector('#turnUp');
const incognitoProjMenu = document.querySelector('#incognitoProjMenu');





nice.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

function isSmallScreen () {
    if(window.matchMedia("(max-width: 767px)").matches){
        ye.classList.add('hidden');
        bet.classList.add('hidden');
        lit.classList.add('hidden');
        yer.classList.add('hidden');
        turnUp.classList.add('hidden');
    
        
    }
}

isSmallScreen();
