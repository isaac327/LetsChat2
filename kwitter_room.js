var firebaseConfig = {
      apiKey: "AIzaSyCyRwL9PiCtibYaC4NldITplI-uVyXPWuk",
      authDomain: "let-s-chat2-3d9bf.firebaseapp.com",
      databaseURL: "https://let-s-chat2-3d9bf-default-rtdb.firebaseio.com",
      projectId: "let-s-chat2-3d9bf",
      storageBucket: "let-s-chat2-3d9bf.appspot.com",
      messagingSenderId: "760273684659",
      appId: "1:760273684659:web:0a80fd80190b181f2648c6"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
}

function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }

