// let ville = 'Paris';
// recevoirTemperature(ville);

// let button = document.querySelector('#changer');
// button.addEventListener('click', () => {
//   ville = prompt('Choisissez une ville :');
//   recevoirTemperature(ville);
// });

// function recevoirTemperature(ville) {
//   const url = 'http://api.weatherapi.com/v1/current.json?key=11da00fa134f437ea73115349232303&q=' + ville + '&lang=Fr';

//   let requete = new XMLHttpRequest(); // permet de récuperer des données a partir d'une url sans avoir a rafaîrchir la page
//   requete.open('GET', url); // instanciation avec en paramètre la methode (GET) et l'url
//   requete.responseType = 'json'; // defini le type de donnée en réponse
//   requete.send(); // Envoi de la requete

//   requete.onload = function() { // onload appelle la fonction lorsque la requête XMLHttpRequest ce termine avec succès
//     if (requete.readyState === XMLHttpRequest.DONE) { // Veut dire si l'état de ma requête est DONE (opération terminé)
//       if (requete.status === 200) { //  status renvoie un code d'état HTTP numérique de la réponse deXMLHttpRequest (* UNSENT: 0 * OPENED: 0* LOADING: 200* DONE: 200) 
//         let reponse = requete.response; // "response" contient le corps de la reponse donc ici notre tableau de la météo
//         let ville = reponse.location.name; // on va chercher dans notre réponse le nom de la ville qui ce trouve dans location.name du tableau
//         let temperature = reponse.current.temp_c;
//         let condition = reponse.current.condition.text;
//         let humidity = reponse.current.humidity;

// // placement dans le dom des différentes donnée  sur la météo
//         let attr = document.querySelector('#logo>img');
//         attr.setAttribute("src", reponse.current.condition.icon)

//         document.querySelector('#condition').textContent = condition;
//         document.querySelector('#ville').textContent = ville;
//         document.querySelector('#temperature_label').textContent = temperature;
//         document.querySelector('#humidity').textContent = humidity;
//       } else {
//             alert('Un problème est intervenu, merci de revenir plus tard.');
//       }
//     }
//   }
// }



// Ville
// Imageurl
// humidité
// température en C


const condition =document.querySelector('#condition');
const ville =document.querySelector('#ville') ;
const temp=document.querySelector('#temperature_label') ;
const humidite =document.querySelector('#humidity');
const img = document.querySelector('img');
// fetch data 
const KEY="11da00fa134f437ea73115349232303";
const BASE_URL = "http://api.weatherapi.com/v1/current.json?key=";



navigator.geolocation.getCurrentPosition((position)=>{
 let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

  fetch(`${BASE_URL}${KEY}&q=${latitude},${longitude}&lang=fr`)
  .then(response => response.json())
  .then(data =>{
      ville.textContent = data.location.name
      temp.textContent = data.current.temp_c
      condition.textContent =data.current.condition.text
      let cond = data.current.condition.code
      if(cond === 1000) {
        document.body.style.backgroundImage = "url('./images/sunny.jpg')"
      }
      else if(cond>= 1003 && cond<= 1009) {
        document.body.style.backgroundImage = "url('./images/cloudy.jpg')"
      }
      else if(cond>= 1063 && cond<= 1150) {
        document.body.style.backgroundImage = "url('./images/rainy.jpg')"
      }
      else if(cond>= 1153 && cond<= 1189) {
        document.body.style.backgroundImage = "url('./images/snowy.jpg')"
      }
      else  {
        document.body.style.backgroundColor = "pink"
      }

      
      img.src = data.current.condition.icon
      humidite.textContent = data.current.humidity
    })


})







    // condition avec lang=fr
    // if(data.current.condition.text == "Ensoleillé") {
    //   document.body.style.backgroundImage = "url('./images/sunny.jpg')"
    // }
    // if(data.current.condition.text == "Partiellement nuageux") {
    //   document.body.style.backgroundImage = "url('./images/cloudy.jpg')"
    // }