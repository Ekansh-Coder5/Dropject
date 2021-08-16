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
    firebase.analytics();

function add_u() {
      user_name = document.getElementById('u_name').value;
      firebase.database().ref("/").child(user_name).update({
          key:"Key"
      })
  }