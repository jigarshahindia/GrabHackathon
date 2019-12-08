var score = 0;
var petrolLeft = 0;
var scoreText;
var timerText;
var onboardingText;
var gameStartTime;
var music;
var collect, carCrash, arrow1;
var gameLoaded = false;

var musicLoadedCount = 1;

let height = window.innerHeight;
let width = window.innerWidth;

let style = {font: "bold 50px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"};

var onboardedScreensChecked = 0;

function create() {
    game.time.advancedTiming = true

    game.load.start();

    game.stage.backgroundColor = '#29A34E';
    game.physics.startSystem(Phaser.Physics.ARCADE);


    collect = game.add.audio('collect');
    carCrash = game.add.audio('car-crash');


    // music.loop = true;


//  Gameplay controls
    cursors = game.input.keyboard.createCursorKeys();


}
function initEnemy() {
    var enemy = game.add.sprite(game.rnd.integerInRange(-1000, 1000), game.rnd.integerInRange(-1000, 1000), 'enemy');
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.body.velocity.set(200);
    enemy.scale.setTo(0.8, 0.8);
    enemy.angle = game.rnd.integerInRange(-180, 180);
    enemy.visible = true;
    return enemy;
}

function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    if (totalLoaded === totalFiles) {
        gameLoaded = true
    }
    console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
    game.stage.backgroundColor = '#29A34E';
}

function initialTimer() {
    initialTimerText = game.add.text(game.world.centerX, game.world.centerY, '3', {
        fontSize: '250px',
        fill: '#fff'
    });

    initialTimerText.anchor.setTo(0.5, 0.5);
    initialTimerText.fixedToCamera = true;
}

function onTap(pointer, doubleTap) {
    onboardedScreensChecked++;
}

function loadComplete() {
    document.getElementById("loader").style.display = "none";

    if (musicLoadedCount <= 2) {
        music = game.add.audio('bg-music', 1, true);
        music.play();
        music.loop = true;
        musicLoadedCount = musicLoadedCount + 1;
    }
    //The scrolling road background
    road = game.add.tileSprite(0, 0, document.body.clientWidth, window.innerHeight, 'road');
    road.visible = false;
    road.fixedToCamera = true;


    //player Arrow
    arrow1 = game.add.sprite(width / 2, height / 1.5 - 150, 'arrow2');

    arrow1.anchor.setTo(0.5, 0.5);
    arrow1.scale.setTo(0.3, 0.3);
    game.physics.enable(arrow1, Phaser.Physics.ARCADE);
    arrow1.angle = -90;
    arrow1.visible = false;

    //  The player sprite

    player = game.add.sprite(width / 2, height / 1.5, 'player');

    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(0.8, 0.8);

    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.velocity.set(0);
    player.angle = 0;
    player.body.stopVelocityOnCollide = true;
    player.visible = false;

    bookingsCompletedImage = game.add.sprite(width - width / 8, height / 50, 'destination');
    bookingsCompletedImage.fixedToCamera = true;
    bookingsCompletedImage.scale.setTo(0.3, 0.3);

    scoreText = game.add.text(width - width / 8 + 6, height / 50 + 90, ' 0', style);
    scoreText.fixedToCamera = true;
    scoreText.visible = false;

    fuelLeft = game.add.sprite(width - width / 8, height / 8, 'fuel');
    fuelLeft.fixedToCamera = true;
    fuelLeft.scale.setTo(0.7, 0.7);

    timerText = game.add.text(width - width / 8 + 6, height / 8 + 90, ' ' + petrolLeft, style);
    timerText.fixedToCamera = true;
    timerText.visible = false;


    game.input.onTap.add(onTap, this);
    rightArrow = game.add.sprite(player.x + 200, height / 1.5, 'right-arrow');
    leftArrow = game.add.sprite(player.x - 400, height / 1.5, 'left-arrow');

    potholeDummy = game.add.sprite(width / 4, height / 2, 'pothole');
    potholeDummy.anchor.setTo(0.5, 0.5);
    potholeDummy.visible = false;
    potholeDummy.scale.setTo(0.6, 0.6);

    oilSpillDummy = game.add.sprite(3 * width / 4, height / 2, 'oil-spill');
    oilSpillDummy.anchor.setTo(0.5, 0.5);
    oilSpillDummy.visible = false;
    oilSpillDummy.scale.setTo(0.6, 0.6);

    fuelDummy = game.add.sprite(width / 2, height / 2, 'fuel');
    fuelDummy.anchor.setTo(0.5, 0.5);
    fuelDummy.visible = false;
    fuelDummy.scale.setTo(1, 1);

    enemies = [];

    onboardingText = game.add.text(width / 2, height / 4, '', style);
    onboardingText.fixedToCamera = true;
    onboardingText.anchor.setTo(0.5, 0.5);

    player.visible = true;
    road.visible = true;
    timerText.visible = true;
    scoreText.visible = true;
    gameLoaded = true;
}

