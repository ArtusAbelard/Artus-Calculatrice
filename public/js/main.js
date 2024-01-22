let btncalc = document.querySelectorAll(".btncalc")
let chiffre = document.querySelectorAll(".chiffre")
let inpscreen = document.querySelector("#inpscreen")


for (let index = 0; index < chiffre.length; index++) {
    chiffre[index].addEventListener('click',()=>{
        inpscreen.value=inpscreen.value+chiffre[index].innerText
    })
}
btncalc[3].addEventListener('click', ()=>{
    inpscreen.value=""

})

console.log(btncalc[3]);