
let no = document.getElementById('no')
let ignore = document.getElementById('ignore')
let hidden = document.getElementById('hidden')
let ok = document.getElementById('ok')
let yes = document.getElementById('yes')
let child = document.getElementById('child')
let bycott = document.getElementById('bycott')

no.addEventListener('click', ()=>{
    ignore.style.display = 'block'
    ignore.classList.add('alive')
    hidden.style.opacity = 0
})

ok.addEventListener('click', ()=>{
    ignore.style.display = 'none'
    ignore.classList.remove('alive')
    hidden.style.opacity = 1
    hidden.style.transition = 'all ease-in 1s'
})

yes.addEventListener('click', ()=>{
    child.style.display = 'block'
    child.style.cursor = 'pointer'
    child.addEventListener('click', ()=>{
        child.style.display = 'none'
        bycott.style.display = 'block'
        bycott.style.cursor = 'pointer'
        bycott.addEventListener('click', ()=>{
            hidden.style.opacity = 1
            child.style.display = 'none'
            bycott.style.display = 'none'
        })
    })  
})