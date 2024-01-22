let btncalc = document.querySelectorAll(".btncalc")
let chiffre = document.querySelectorAll(".chiffre")    //! ciblage des elements !
let inpscreen = document.querySelector("#inpscreen")


for (let index = 0; index < chiffre.length; index++) {
    chiffre[index].addEventListener('click',()=>{                   //! boucle pour trigger tout les boutons et l afficher dans l input ! 
        inpscreen.value=inpscreen.value+chiffre[index].innerText
    })
}



btncalc[3].addEventListener('click', ()=>{
    inpscreen.value=""                         //!bouton AC pour clear l input

})

let btnegal
btncalc[18].addEventListener('click', ()=>{
    btnegal=inpscreen.value                        //! le bouton =
    console.log(btnegal.charAt(0));
    // if (btnegal.charAt(0)=".") {
    //     // console.log(btnegal);
    //     // console.log(btnegal.charAt(0));
    //     inpscreen.value="veullez rentrer un chiffre en premier"  //! j ai tester un peu la robustesse a paufiner
    // }else{
    inpscreen.value=eval(btnegal) 
})

