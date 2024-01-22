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
    btnegal=inpscreen.value
    console.log(btnegal.charAt(0));
    // if (btnegal.charAt(0)=".") {
    //     // console.log(btnegal);
    //     // console.log(btnegal.charAt(0));
    //     inpscreen.value="veullez rentrer un chiffre en premier"
    // }else{

    
    
    inpscreen.value=eval(btnegal)
    
    
})

// if (inpscreen.value=".") {
//     inpscreen.value="veullez rentrer un chiffre en premier"
// }