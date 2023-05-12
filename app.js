

const items=[
    {
        id:1,   //identifiant 1
        nom:"Menu Classic",  //nom du menu
        img:"img/m1.png", //chemin de l'image
        prix: 5,  //prix du menu
        description:"Burger, Salade, Tomate, Cornichon"  //description du menu
    
    },
    
    {
        id:2,
        nom:"Menu Bacon",
        img:"img/m2.png",
        prix: 6,
        description:"Burger, Fromage, Bacon, Salade, Tomate"
    
    },
    {
        id:3,
        nom:"Menu Big",
        img:"img/m3.png",
        prix: 8,
        description:"Double Burger, Fromage, Cornichon, Salade"
    
    },
    {
        id:4,
        nom:"Menu Chicken",
        img:"img/m4.png",
        prix: 7,
        description:"Poulet Frit, Tomate, Salade, Mayonnaise"
    
    },
]



const list = document.querySelector('.cards-list'); //retourne le premier élément dans '.cards-list'


function afficheitem(doc){  //nom de la fonction affiche item
    let carte = document.createElement('div'); //créer une div
        carte.setAttribute('id', doc.id); //ajout d'un nouvel attribu
        carte.classList.add('card');
        // code HTML 
        carte.innerHTML='<div class="card_image"><img src="'+ doc.img + '"/></div><div class="card_title title-white"><div><p>'+ doc.nom+'</p><p>'+doc.prix +' E</p></div> </div> </div>';
   list.appendChild(carte);
  
}


items.map(item=>afficheitem(item));


//page blanche 
function vide(){
    list.innerHTML=""
    }


//fonction +CHER 
function maxValue() {
    vide();
    const element = items.filter(items => personnes.prix >7);
    console.log(element);
    
    const liste= element.map(x=> '<li>' + x.information()+'</li>');
}


    
//Fonction MOYENNE PRIX
    function moyenne(){
        const prix=item.map(x=>x=x.prix);
        console.log(prix);
        console.log(prix.length);
        const somme=prix.reduce((moyenne,item)=>(moyenne+item))/prix.length;
        console.log(somme);
    }






   

  //configuration FIREBASE 
 var config = {
    apiKey: "AIzaSyA06yjAorVh5SLpAieP6e5qvhPsBtio-EM",
    authDomain: "migaud1.firebaseapp.com",
    projectId: "migaud1",
    storageBucket: "migaud1.appspot.com",
    messagingSenderId: "667618445586",
    appId: "1:667618445586:web:a768bbcaa176b2245a0bcb"
  };

  // Initialisation Firebase
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

  //Variable pour accéder a la collection dans la base de données
   const db = firestore.collection("menus");

   //Obtenir les valeurs du formulaire 
let nom = document.getElementById("nom").value;
let img = document.getElementById("img").value;
let prix = document.getElementById("prix").value;
let description = document.getElementById("description").value;


firestore
  .collection("menu")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const fn = doc.data().nom;
      if (nom === fn) {
        console.log("Already Exists");
      }

      // console.log("data", doc.data().fname);
    });
  });