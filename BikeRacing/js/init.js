var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');
var player, pointer;
var cursors;
var road;
var currentLevel = -1;
var enemies;
var initialTimerText;
var gameLoaded = false;
var onboarded = false;
var leftArrow, rightArrow;
var potholeDummy, oilSpillDummy, fuelDummy;


game.state.add('play', { preload: preload, create: create, update: update, render: render });
game.state.start('play');

  function render () {

  }





