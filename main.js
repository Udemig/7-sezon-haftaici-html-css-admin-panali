const openbutton=document.getElementById('open-btn')
const closebutton=document.getElementById('close-btn')
const aside=document.getElementById('aside-bar')

openbutton.addEventListener('click',()=>{
    aside.classList.add('active-aside')
})

closebutton.addEventListener('click',()=>{
    aside.classList.remove('active-aside')
})