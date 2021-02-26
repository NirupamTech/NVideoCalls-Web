var app_fireBase = {};
(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyDyLXBw5gc0wju93I39JuNmup0GT00TQm4",
        authDomain: "nvideocalls.firebaseapp.com",
        databaseURL: "https://nvideocalls-default-rtdb.firebaseio.com",
        projectId: "nvideocalls",
        storageBucket: "nvideocalls.appspot.com",
        messagingSenderId: "649934887793",
        appId: "1:649934887793:web:39d0c53efddd0a8ea0b4d0",
        measurementId: "G-LSJGT161XS"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      app_fireBase = firebase;
})()