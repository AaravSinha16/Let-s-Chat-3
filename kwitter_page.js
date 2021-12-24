const firebaseConfig = {
      apiKey: "AIzaSyCwNkJXf6VP3woQB9Ogelwv6yWYx88LD-s",
      authDomain: "let-s-chat-aac30.firebaseapp.com",
      databaseURL: "https://let-s-chat-aac30-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-aac30",
      storageBucket: "let-s-chat-aac30.appspot.com",
      messagingSenderId: "554308479056",
      appId: "1:554308479056:web:5c769d63ece82f5167c955",
      measurementId: "G-746NYC73JT"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}