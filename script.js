let projectOne = document.getElementById("projectOne");
projectOne.addEventListener("click", function(event){
    event.preventDefault();
        alert("Ce projet n\'est pas disponible pour éviter tout plagiat. (Recommandation OpenClassrooms)");
})

const errorMess = "Ce projet n\'est pas encore disponible... Learning in progress :)";

let projectSix = document.getElementById("projectSix");
projectSix.addEventListener("click", function(event){
    event.preventDefault();
        alert(errorMess);
})