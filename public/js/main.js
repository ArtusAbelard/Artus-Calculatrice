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

let btnegal
btncalc[18].addEventListener('click', ()=>{
    console.log(inpscreen.value);
    btnegal=inpscreen.value
    console.log(eval(btnegal));
    inpscreen.value=eval(btnegal)
})