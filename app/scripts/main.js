//This is a js for creating an interactive fight game


// These are the constructors used in this script

var Player = function(options){
  this.pname = options.name;
  this.pavatar = options.avatar;
  this.health = 100;
  this.attack = function(attackee){
    attackee.health = attackee.health - _.random(5, 10);
  };
};


var Opponent = function(options){
  this.oname = options.name;
  this.oavatar = options.avatar;
  this.health = 100;
  this.attack = function(attackee){
    attackee.health = attackee.health - _.random(5, 10);
  };
};

//This sets up the templates to be used later

var oavatar_img,
    pavatar_img,
    render_pavatar = _.template($('#player_avatar').html());
    render_oavatar = _.template($('#opponent_avatar').html());




// These are the players and opponents

var player1 = new Player({
    name: 'Hairdresser',
    avatar: 'http://adrianerdedi.com/wp-content/uploads/2010/04/will-fennellnew.jpg'
});

var player2 = new Player({
    name: 'Flight Attendant',
    avatar: 'http://slowbuddy.com/wp-content/gallery/cartoon-pictures/cartoon_kid_runner.jpg'
});

var player3 = new Player({
    name: 'Server at Joes',
    avatar: 'https://lh5.googleusercontent.com/-lmK3WLrOxh4/TW1smUNWWhI/AAAAAAAAAd8/CIa8e7Wr1do/s200/waiter.jpg'
});

var opponent1 = new Opponent({
    name: 'Bar Tender',
    avatar: 'http://fasab.files.wordpress.com/2013/01/cartoon-otter.gif'
});

var opponent2 = new Opponent({
    name: 'Lumberjack',
    avatar: 'http://1.bp.blogspot.com/_-CWxsJwZq0E/TSsNebqC-PI/AAAAAAAABhc/vziENTxCym8/s1600/BenLumberjack_clr.jpg'
});

var opponent3 = new Opponent({
    name: 'Leather Daddy',
    avatar: 'http://farm1.static.flickr.com/35/73622729_1fb6a7510b_m.jpg'
});


// This starts the action


var player, opponent;




$('.player button').on('click', function(event){
  event.preventDefault();

  player = $('#player').val();

  if (player === 'player1'){
    player = player1;
  } else if (player === 'player2'){
    player = player2;
  } else if (player === 'player3'){
    player = player3;
  }

  pavatar_img = player.pavatar;
  console.log(pavatar_img);

  $('.pavatar').append(render_pavatar(pavatar_img));

  console.log(player);
});


$('.opponent button').on('click', function(event){

  opponent = $('#opponent').val();

  if (opponent === 'opponent1'){
    opponent = opponent1;
  } else if (opponent === 'opponent2'){
    opponent = opponent2;
  } else if (opponent === 'opponent3'){
    opponent = opponent3;
  }

  oavatar_img = opponent.oavatar;
  console.log(oavatar_img);

  $('.opavatar').append(render_oavatar(oavatar_img));

  console.log(opponent);

});
