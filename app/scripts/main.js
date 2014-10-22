//This is a js for creating an interactive fight game


// These are the constructors used in this script

var Player = function(options){
  this.pname = options.name;
  this.pavatar = options.avatar;
  this.health = 100;
}


var Opponent = function(options){
  this.oname = options.name;
  this.oavatar = options.avatar;
  this.health = 100;
}


// These are the players and opponents

var player1 = new Player({
    name: 'Hairdresser',
    avatar: 'http://adrianerdedi.com/wp-content/uploads/2010/04/will-fennellnew.jpg'
})

var player2 = new Player({
    name: 'Runner',
    avatar: 'http://slowbuddy.com/wp-content/gallery/cartoon-pictures/cartoon_kid_runner.jpg'
})

var player3 = new Player({
    name: 'Server at Joes',
    avatar: 'https://lh5.googleusercontent.com/-lmK3WLrOxh4/TW1smUNWWhI/AAAAAAAAAd8/CIa8e7Wr1do/s200/waiter.jpg'
})

var opponent1 = new Opponent({
    name: 'Otter',
    avatar: 'http://fasab.files.wordpress.com/2013/01/cartoon-otter.gif'
})

var opponent2 = new Opponent({
    name: 'Lumberjack',
    avatar: 'http://1.bp.blogspot.com/_-CWxsJwZq0E/TSsNebqC-PI/AAAAAAAABhc/vziENTxCym8/s1600/BenLumberjack_clr.jpg'
})

var opponent3 = new Opponent({
    name: 'Leather Daddy',
    avatar: 'http://farm1.static.flickr.com/35/73622729_1fb6a7510b_m.jpg'
})
