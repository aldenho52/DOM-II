// Your code goes here
console.log('project running and linked')

// mouseover
const navLinks = document.querySelectorAll('a')
navLinks.forEach ( link => {
    link.addEventListener('mouseover', (e) => {
        link.style.background = 'lightgreen'
        link.style.padding = '10px'
        link.style.borderRadius = '10px'
    })
})

// * `keydown`
const headerP = document.querySelector('header p')
window.addEventListener('keydown', (event) => {
    if (event.key === "f") {
        headerP.style.background = 'yellow'
        headerP.style.padding = '10px'
        headerP.style.borderRadius = '10px'
    }
    
})
window.addEventListener('keyup', (event) => {
    if (event.key === "f") {
        headerP.style.background = 'white'
    }
    
})

const keydownInstructions = document.createElement('p')
keydownInstructions.textContent = 'Hold F to see what happens!'
keydownInstructions.style.fontSize = '20px'
keydownInstructions.style.fontStyle = 'italic'
keydownInstructions.style.paddingTop = '20px'
headerP.appendChild(keydownInstructions)

// * `wheel`



// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`