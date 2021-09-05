const firebaseConfig = {
       apiKey: "AIzaSyAn0ieWBRRoeXM_sQq3ZwKYj4_8W2Ocapk",
       authDomain: "dropject-b1c62.firebaseapp.com",
       projectId: "dropject-b1c62",
       storageBucket: "dropject-b1c62.appspot.com",
       messagingSenderId: "835668857529",
       appId: "1:835668857529:web:b05c5c7984218fd8364168",
       measurementId: "G-JSQLDETXVG"
     };
     
     // Initialize Firebase
const app = initializeApp(firebaseConfig);
U_name = localStorage.getItem("U_name");
document.getElementById('U_name').innerHTML = "Welcome " + U_name +"!"
 
 
function add_room() {
 
R_name = document.getElementById('R_name').value;
firebase.database().ref("/").child(R_name).update({
        purpose : "adding room name" 
});
 
localStorage.setItem("R_name", R_name);
window.location = "Dwitter_page.html"
 
}
 
 
 
 
 
function getData() {
       firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code
       row = "<div class='room_name' id="+Room_names+" onclick='Redirect(this.id)' >#"+ Room_names +"</div><hr>";
 
       document.getElementById('output').innerHTML += row;
       //End code
       });});}
       
getData();
 
function Redirect(name) {
       localStorage.setItem('Roome_name', name);
       window.location = "Dwitter_page.html";
}
 
function logout() {
       localStorage.removeItem('U_name');
       localStorage.removeItem('R_name');
       window.location = "index.html"
}