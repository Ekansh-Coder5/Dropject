//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
var firebaseConfig = {
      apiKey: "AIzaSyAn0ieWBRRoeXM_sQq3ZwKYj4_8W2Ocapk",
      authDomain: "dropject-b1c62.firebaseapp.com",
      projectId: "dropject-b1c62",
      storageBucket: "dropject-b1c62.appspot.com",
      messagingSenderId: "835668857529",
      appId: "1:835668857529:web:a07d0b332b970101364168",
      measurementId: "G-63EL40KPDX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    U_name = localStorage.getItem("U_name");
    R_name = localStorage.getItem("R_name");

    function send() {
          msg = document.getElementById('msg').value;
          firebase.database().ref(R_name).push({
                name : U_name,
                msg : msg,
                like : 0
          });
          document.getElementById('msg').value ="";


      }
