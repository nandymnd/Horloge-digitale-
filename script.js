function mettreAJourHorloge() {
  const maintenant = new Date(); 

  // Récupérer l'heure, les minutes et les secondes 
  const heures = maintenant.getHours().toString().padStart(2, "0"); 
  const minutes = maintenant.getMinutes().toString().padStart(2, "0"); 
  const secondes = maintenant.getSeconds().toString().padStart(2, "0"); 

  // Afficher l'heure au format HH:MM:SS
  document.getElementById("heure").textContent = `${heures}:${minutes}:${secondes}`; 

  // Récupérer la date 
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
  const dateFormatee = maintenant.toLocaleDateString('fr-FR', optionsDate);
  document.getElementById('date').textContent = dateFormatee; 
}

// Mettre à jour l'horloge toutes les secondes
setInterval(mettreAJourHorloge, 1000); 

// Appeler la fonction une première fois pour éviter un délai d'affichage
mettreAJourHorloge(); 
