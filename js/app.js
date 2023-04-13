/* Ancien code avant optimisation */
/* 
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
*/

/* Voici le code optimisé en utilisant des variables pour stocker
les éléments du DOM et en réduisant la duplication de code
en utilisant une variable pour stocker le texte affiché en
fonction de l'état de la case à cocher */
const checkbox = document.getElementById('checkbox');
const infoElement = document.getElementById('infoo');
const darkModeText = 'Mode sombre activé';
const lightModeText = 'Mode clair activé';

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');

  const modeText = checkbox.checked ? darkModeText : lightModeText;
  const color = checkbox.checked ? 'white' : 'black';

  infoElement.innerText = modeText;
  infoElement.style.color = color;
});
/* Dans ce code, nous avons utilisé des noms de variables plus significatifs
pour rendre le code plus facile à comprendre.
Nous avons également stocké le texte qui doit être affiché à chaque état de
la case à cocher pour éviter la duplication de code.
Enfin, nous avons utilisé une condition ternaire pour déterminer quel texte et
quelle couleur doivent être utilisés en fonction de l'état de la case à cocher.*/