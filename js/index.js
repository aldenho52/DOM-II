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

// * `keydown` and 'keyup'
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

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    mainImg.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const mainImg = document.querySelector('img');
  mainImg.onwheel = zoom;

// * `load`

window.addEventListener('load', event => {
    // alert('BOOM! Welcome to the FUN BUS!')  
})

// * `focus`

const promptText = document.createElement('input')
promptText.textContent = ''
headerP.appendChild(promptText)

promptText.addEventListener('focus', (event) => {
    event.target.style.background = 'pink'
})

const promptButton = document.createElement('button')
promptButton.textContent = 'Push to see what happens'
promptButton.style.marginLeft = '10px'
headerP.appendChild(promptButton)

// function prompt (e) {
//     e.textContent = e.target.value
//     prompt(`${promptText}`)
//     promptText.textContent = ''
//     // promptText.focus()
// }

// promptButton.addEventListener('click', (prompt))

// * `scroll`

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY

    if (Math.ceil(scrolled) === scrollable) {
        const bottomMessage = document.createElement('h2')
        bottomMessage.textContent = 'Congrats! You reached the bottom of the page!'
        bottomMessage.style.background = 'pink'
        bottomMessage.style.textAlign = 'center'
        document.body.appendChild(bottomMessage)
    }
})

// * `select`
// * `dblclick`
// * `drag / drop`