/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let lightMode = localStorage.getItem('lightMode')

const lightModeToggle = document.querySelector('#light-mode-toggle')

const enableLightMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('lightmode');
    // 2. Update lightMode in localStorage
    localStorage.setItem('lightMode', 'enabled')
}

const disableLightMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('lightmode')
    // 2. Update lightMode in localStorage
    localStorage.setItem('lightMode', null)
}

//If the user already visited and enabled lightMode
//start things off with it on
if (lightMode === 'enabled') {
    enableLightMode();
}

//When someone clicks the button
lightModeToggle.addEventListener('click', () => {
    //get their lightMode setting
    lightMode = localStorage.getItem('lightMode');
    // if it isn't currently enabled, enable it
    if (lightMode !== 'enabled') {
        enableLightMode();
    } else {
        disableLightMode();
    }
})


const meterToFeet = 3.28084
const literToGallon = 0.264172
const kiloToPound = 2.20462


const convBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convBtn.addEventListener("click", function() {
    let input= document.getElementById("input").value
    convert (input)
} )

function convert (input) {
    let length = ""
    let volume = ""
    let mass = ""
    
    //Calculate length conversion
    length += `${input} meters = ${(input * meterToFeet).toFixed(3)} feet | ${input} feet ${(input / meterToFeet).toFixed(3)} meters`
    lengthEl.innerHTML = length
    
    //Calculate volume conversion
    volume += `${input} liters = ${(input * literToGallon).toFixed(3)} gallons | ${input} gallons ${(input / literToGallon).toFixed(3)} liters`
    volumeEl.innerHTML = volume

    //Calculate mass conversion
    mass += `${input} kilos = ${(input * kiloToPound).toFixed(3)} pounds | ${input} pounds ${(input / kiloToPound).toFixed(3)} kilos`
    massEl.innerHTML = mass
}
