var firebaseConfig = {
    apiKey: "AIzaSyCoj5WF16zvfuDvJtJpFNYIsuNwAd8X7e0",
    authDomain: "uchat1-28fcc.firebaseapp.com",
    databaseURL: "https://uchat1-28fcc-default-rtdb.firebaseio.com",
    projectId: "uchat1-28fcc",
    storageBucket: "uchat1-28fcc.appspot.com",
    messagingSenderId: "835377439699",
    appId: "1:835377439699:web:c6bf3f9d84e599f9f9c526"
  };
  firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";
