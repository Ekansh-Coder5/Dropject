//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+R_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data["name"];
message = message_data["msg"];
like = message_data["like"];

name_tag = "<h4>" + name + "<img class='user_tick'> <src='tick.png'> </h4>";
message_tag = "<h4 class='message_h4'>" + message + "</h4>";

like_button ="<button class='btn btn-warning' id="+firebase_message_id+ " value="+like+ " onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_tag + message_tag +like_button + span_tag;
document.getElementById("output").innerHTML += row;


//End code
}});}); }

getData();

function updateLike(message_id) {
      console.log("likedmsgid - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes) + 1;
      firebase.database().ref(R_name).child(message_id).update ({
            like : updatedLikes
      })
}