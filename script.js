// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;


let ourAP = 150;
let fungusHP = 150;
let ourAPScore = document.querySelector('.ap-text');
let fungusHPScore = document.querySelector('.hp-text'); 
let enemyClasses = document.querySelector('.freaky-fungus');


function onReady() {
    console.log("Ready to go!")
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
      
    
    ourAPScore.textContent = `${ourAP} AP`;
    fungusHPScore.textContent = `${fungusHP} HP`;
   

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

onReady()

//TO-DO: HandleClick events
//1. update state variables to make the Fungus lose hit points, 
//and to reduce your attack points (AP)
//2.  State may be held in one our more variables 
//3. HP and AP values may not be negative 
//  (set to zero, if they would otherwise be negative)

function scoreStateMinimum(event) {
event.preventDefault();
    if (ourAP < 0) {
        ourAP = 0;
        ourAPScore.textContent = `${ourAP} AP`;
    }
    if (fungusHP < 0) {
        fungusHP = 0;
        fungusHPScore.textContent = `${fungusHP} HP`;
    }
}
function handleArcaneClick(event) {
event.preventDefault();
//AP cost: 12
//HP damage: 14
ourAP = ourAP - 12;
fungusHP = fungusHP - 14;

ourAPScore.textContent = `${ourAP} AP`;
fungusHPScore.textContent = `${fungusHP} HP`;

}

function handleEntangleClick(event) {
event.preventDefault();
//AP cost: 23
//HP damage: 9
ourAP = ourAP - 23;
fungusHP = fungusHP - 9;

ourAPScore.textContent = `${ourAP} AP`;
fungusHPScore.textContent = `${fungusHP} HP`;

}

function handleDragonClick(event) {
event.preventDefault();
//AP cost: 38
//HP damage: 47
ourAP = ourAP - 38;
fungusHP = fungusHP - 47;

ourAPScore.textContent = `${ourAP} AP`;
fungusHPScore.textContent = `${fungusHP} HP`;

}

function handleStarClick(event) {
event.preventDefault();
//AP cost: 33
//HP damage: 25
ourAP = ourAP - 33;
fungusHP = fungusHP - 25;

ourAPScore.textContent = `${ourAP} AP`;
fungusHPScore.textContent = `${fungusHP} HP`;

}

//TO-DO: Render state changes to DOM
// Update the text above the attack buttons (eg, "100 AP")
// Update the text above the enemy fungus 
// set condition#1--If the Fungus runs out of HP, its dead & you win
// replace the walk class with a dead class on the freaky-fungus element to make it die. 

// set condition #2--If you run out of AP, the monster wins 
// replace the walk class with jump class on the freaky-fungus element.


function fungusClassCondition(event) {
event.preventDefault();
let attackBtn1 = document.querySelector('.arcane-scepter');
let attackBtn2 = document.querySelector('.entangle');
let attackBtn3 = document.querySelector('.dragon-blade');
let attackBtn4 = document.querySelector('.star-fire');

if(fungusHP <= 0) {
    enemyClasses.classList.replace("walk", "dead");
    //console.log('Freaky fungus dies, and drops dead.');
    }
if(ourAP <= 0) {
    enemyClasses.classList.replace("walk", "jump");
    attackBtn1.disabled = true; 
    attackBtn2.disabled = true; 
    attackBtn3.disabled = true; 
    attackBtn4.disabled = true; 

    //attackButtons.disabled = true;
    //console.log('No! Fungus monster wins and humanity is doomed.');
    }
}


