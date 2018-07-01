$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBiouKTg-sFzmZZcDhuoENEzaLw1mwQeJY",
    authDomain: "rps-multiplayer-26254.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-26254.firebaseio.com",
    projectId: "rps-multiplayer-26254",
    storageBucket: "rps-multiplayer-26254.appspot.com",
    messagingSenderId: "321954771544"
  };
  var fire = firebase.initializeApp(config);

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
    handle: '',
    wins: 0,
    losses: 0,
    turns: 0,
    choice: ''
  };
  var waiting = false;

  //Initial connection to Firebase; only needed once, so we use 'once' instead of 'on'
  connectionsRef.once('value', function (snapshot) {
    //console.log(Object.keys(snapshot.val()).indexOf('1'));
    if (Object.keys(snapshot.val()).indexOf('1') === -1) {
      player.number = '1';
      opponent.number = '2';
    } else if (Object.keys(snapshot.val()).indexOf('2') === -1) {
      player.number = '2';
      opponenet.number = '1';
    }

    //Assigns  user as either Player 1 or Player 2
    if (player.number !== '0') {
      con = connections.child(player.number);
      con.set(player);

      //Removes user on disconnect
      con.onDisconnect().remove();

    } else {
      $(".handle-row").remove();
      $(".alert").show();
      fire.delete();
    }
  });

  // Function for updating Firebase values on every value-change
  connectionsRef.on("value", function (snapshot) {
  if (con) {
    if (Object.keys(snapshot.val()).indexOf(opponent.number) !== -1) {
      opponent = snapshot.val()[opponent.number];
      player = snapshot.val()[player.number];
      //If we have an opponent...//
      if (opponent.name.length > 0) {
        
      }
    }
  }
  })

  //Functions to manipulate HTML elements
  var htmlManip = {
    playerJoin: function() {
      var handle = $("#handle");
      var playerInput = $("#player-input");
      handle.val("");
      $(".player-form").hide();
      $(".waiting-" + player.number).hide();
      $(".user-handle-" + player.number).text(player.handle);
    }
  }


});