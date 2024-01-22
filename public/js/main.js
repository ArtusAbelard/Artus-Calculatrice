let btncalc = document.querySelectorAll(".btncalc")
let chiffre = document.querySelectorAll(".chiffre")
let inpscreen = document.querySelector("#inpscreen")

console.log(btncalc[4].innerText);

// btncalc[3].addEventListener('click', ()=>{
//     inpscreen.value=""
// })
// btncalc[4].addEventListener('click', ()=>{
//     inpscreen.value=inpscreen.value+btncalc[4].innerText
// })
// btncalc[5].addEventListener('click', ()=>{
//     inpscreen.value=inpscreen.value+btncalc[5].innerText
// })

// btncalc.forEach(element => {
//     element[i].addEventListener('click', ()=>{
//         inpscreen.value=inpscreen.value+btncalc[i].innerText
//     })
// });

for (let index = 0; index < chiffre.length; index++) {
    chiffre[index].addEventListener('click',()=>{
        inpscreen.value=inpscreen.value+chiffre[index].innerText
    })
    
}