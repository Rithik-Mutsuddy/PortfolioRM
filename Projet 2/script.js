function ajouterLigne(){
    var newLi= document.getElementById("modeleLigne").cloneNode(true);
    var lastLi= document.getElementById("lastLigne");

    var pere= document.getElementById("table_inv").firstChild.nextSibling;
    pere.insertBefore(newLi,lastLi);

}
function supprimerLigne(){
	document.getElementById("table_inv").deleteRow(-1);
}
function calculate(){
    var total = 0

    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeTtl = document.getElementsByClassName("totalLigne");

    for (var i = 0; i< listePrix.length;i++) {
        listeTtl[i].value = parseInt(listeQte[i].value)*parseInt(listePrix[i].value);
        total = total + parseInt(listeTtl[i].value);
        document.getElementsByClassName("total").innerHTML = total;
    }
    var TOTAL = document.getElementsByClassName("TOTAL");
    TOTAL[0].value = total;
    var REMISE = document.getElementsByClassName("REMISE");
    var EXPEDITO = document.getElementsByClassName("EXPEDITO");
    var TOTALREMISE = document.getElementsByClassName("TOTALREMISE");
    TOTALREMISE[0].value = TOTAL[0].value - REMISE[0].value;

    var TAUX = document.getElementsByClassName("TAUX");

    var TAXE = document.getElementsByClassName("TAXE");
    TAXE[0].value = parseInt(TOTAL[0].value) * parseInt(TAUX[0].value);

    var SOLDE = document.getElementsByClassName("SOLDE");
    SOLDE[0].value = parseInt(TOTALREMISE[0].value)+parseInt(TAXE[0].value)+parseInt( EXPEDITO[0].value);

}
function remplir() {
    let listePrix = document.getElementsByClassName("prix");
    let listeQte = document.getElementsByClassName("qte");
    let listeDesc = document.getElementsByClassName("desc");

    const tabDesc = new Array("Laptop","cableHDMI", "bureautique", "ram 4gb", "usb 16gb", "mouse", "ecran ", "SSD 500 Go","Chassis","Carte mere");

    for (let i=0; i < listeDesc.length; i++) {

        let idesc = Math.floor(tabDesc.length * Math.random());
        listeDesc[i].value = tabDesc[idesc];

        let qte = Math.floor(10 * Math.random() + 1);
        let prix = Math.floor(100 * Math.random() + 1);
        listeQte[i].value = qte;
        listePrix[i].value = prix;
    }
}
function reinitialiser(){
    table_inv="";
}