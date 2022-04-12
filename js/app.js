const checkbox = document.getElementById('checkbox')
const raj = document.getElementById('infoo')
console.log(raj);
checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('dark')

    if(checkbox.checked){
        raj.innerText = 'Mode sombre activé'
        raj.style.color = 'white'
    }else{
        raj.innerText = 'Mode clair activé'
        raj.style.color = 'black'
    }
})
