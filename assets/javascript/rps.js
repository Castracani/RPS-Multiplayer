$(document).ready(function (){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBiouKTg-sFzmZZcDhuoENEzaLw1mwQeJY",
    authDomain: "rps-multiplayer-26254.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-26254.firebaseio.com",
    projectId: "rps-multiplayer-26254",
    storageBucket: "rps-multiplayer-26254.appspot.com",
    messagingSenderId: "321954771544"
  };
  firebase.initializeApp(config);

  //Firebase variables
  var database = firebase.database();
  var chatRef = database.ref('chat');
  var connectionsRef = database.ref('/connections');
  var connectedRef = database.ref('.info/connected');

  // Initialize player and opponent data
  var con;
  var player = {
    number: '0',
    handle: '',
    wins: 0,
    losses: 0,
    turns: 0,
    choice: ''
  };
  var opponent = {
    number: '0',
    name: '',
    wins: 0,
    losses: 0,
    turns: 0,
    choice: ''
  };
  var waiting = false;
})