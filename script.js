const btnPierre= document.querySelector('.pierre')
const btnFeuille= document.querySelector('.feuille')
const btnCiseaux= document.querySelector('.ciseaux')
const score= document.querySelector('.score')
const scoreOrdinateur= document.querySelector('.scoreOrdi')
var scoreValue= 1;
var scoreOrdi= 1;

var mots= ['pierre', 'feuille', 'ciseaux']

btnPierre.onclick= () => {
    var pierre= document.createElement('p')
    pierre.innerHTML= mots[Math.floor(Math.random() * 3)]
    document.body.appendChild(pierre)
    console.log("Choix Joueur: " + btnPierre.value)
    console.log("Choix Ordi: " + pierre.innerHTML)
    if (pierre.innerHTML == "pierre") {
        alert('égalité')
        document.body.removeChild(pierre)
    }
    if (pierre.innerHTML == "feuille") {
        perdre()
        document.body.removeChild(pierre)
    }
    if (pierre.innerHTML == "ciseaux") {
        victoire()
        document.body.removeChild(pierre)
    }
}
btnFeuille.onclick= () => {
    var feuille= document.createElement('p')
    feuille.innerHTML= mots[Math.floor(Math.random() * 3)]
    document.body.appendChild(feuille)
    console.log("Choix Joueur: " + btnFeuille.value)
    console.log("Choix Ordi: " + feuille.innerHTML)
    if (feuille.innerHTML == "feuille") {
        alert('egalité')
        document.body.removeChild(feuille)
    }
    if (feuille.innerHTML == "pierre") {
        victoire()
        document.body.removeChild(feuille)
    }
    if (feuille.innerHTML == "ciseaux") {
        perdre();
        document.body.removeChild(feuille)
    }
}
btnCiseaux.onclick= () => {
    var ciseaux= document.createElement('p')
    ciseaux.innerHTML= mots[Math.floor(Math.random() * 3)]
    document.body.appendChild(ciseaux)
    console.log("Choix Joueur: " + btnCiseaux.value)
    console.log("Choix ordi: " + ciseaux.innerHTML)
    if (ciseaux.innerHTML == "ciseaux") {
        alert('egalité')
        document.body.removeChild(ciseaux)
    }
    if (ciseaux.innerHTML == "feuille") {
        victoire()
        document.body.removeChild(ciseaux)
    }
    if (ciseaux.innerHTML == "pierre") {
        perdre();
        document.body.removeChild(ciseaux)
    }
}

function victoire() {
    alert('gagné !!')
    score.value= scoreValue;
    scoreValue= scoreValue + 1;
    score.innerHTML= scoreValue;
    if(scoreValue === 4) {
        gagne();
    }
}
function perdre() {
    alert('perdu !!')
    scoreOrdinateur.value= scoreOrdi;
    scoreOrdi= scoreOrdi + 1;
    score.innerHTML= scoreOrdinateur;
    if(scoreOrdi === 4) {
        perdu()
    }
}
function perdu() {
    alert("C'est qui le perdu !?")
    let scoreOrdi= 1;
    console.log(scoreValue)
    console.log(scoreOrdinateur)
}
function gagne() {
    alert("C'est qui le vainqueur !?")
    let scoreValue= 1;
    console.log(score)
    console.log(scoreOrdi)
}