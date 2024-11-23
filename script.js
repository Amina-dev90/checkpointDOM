var produit = document.getElementsByClassName("box");

function updateTotalCommande() {
    let totalCommande = 0;
    for (let i = 0; i < produit.length; i++) {
        let total = produit[i].children[3].children[1]; 
        totalCommande += parseInt(total.innerText);
    }
    document.getElementById("tyu").innerText = totalCommande;
}

for (let i = 0; i < produit.length; i++) {
    let bntPlus = produit[i].children[4].children[2];  
    let bntMoins = produit[i].children[4].children[0];  
    let nombre = produit[i].children[4].children[1];   
    let total = produit[i].children[3].children[1];    
    let prixUnit = produit[i].children[2].children[1]; 
    let btnHeart = produit[i].children[5].children[0]; 
    let deleButton = produit[i].children[5].children[1];

    let qty = parseInt(nombre.innerText);
    let prixUnitaire = parseInt(prixUnit.innerText);

   
    bntPlus.addEventListener("click", function() {
        qty++;
        nombre.innerText = qty;
        total.innerText = prixUnitaire * qty;
        updateTotalCommande(); })
         
      
        bntMoins.addEventListener("click", function() {
            if (qty>0)
            qty--;
            nombre.innerText = qty;
            total.innerText = prixUnitaire * qty;
            updateTotalCommande();  })

    // Bouton cœur
    btnHeart.addEventListener("click", function() {
        if (btnHeart.classList.contains("liked")) {
            btnHeart.classList.remove("liked");
            console.log("Cœur retiré");
        } else {
            btnHeart.classList.add("liked");
            console.log("Cœur ajouté");
        }
    });


    deleButton.addEventListener("click", function() {
        produit[i].remove();  
        updateTotalCommande();  
        console.log("Produit supprimé");
    });
}