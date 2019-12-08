
function preload() {
    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);

    game.load.image('player', 'assets/bike.png');
    game.load.image('player-when-on-the-way1', 'assets/Driver-Customer2.png');
    game.load.image('player-when-dropping1', 'assets/Driver-Customer5.png');
    game.load.image('player', 'assets/bike.png');
    game.load.image('enemy', 'assets/bike.png');
    game.load.image('rock', 'assets/rock.png');
    game.load.image('destination', 'assets/pickup.png');
    game.load.image('fuel', 'assets/fuel.png');
    game.load.image('pickup', 'assets/dropoff.png');
    game.load.image('road', 'assets/road1.png');
    game.load.image('arrow1', 'assets/arrow_close.png');
    game.load.image('arrow2', 'assets/arrow_far.png');
    game.load.image('left-arrow', 'assets/left-arrow.png');
    game.load.image('right-arrow', 'assets/right-arrow.png');
    game.load.image('pickup-cloud', 'assets/picked_cloud.png');
    game.load.image('arrived-cloud', 'assets/arrived_cloud.png');
    game.load.audio('bg-music', 'assets/bg-music.mp3');
    game.load.audio('collect', 'assets/collect.mp3');
    game.load.audio('car-crash', 'assets/car-crash.mp3');

    game.load.image('modal', 'assets/modal-min.png');
    game.load.image('play-button', 'assets/play.png');
    game.load.image('share-button', 'assets/share.png');

    game.load.image('pothole', 'assets/pothole.png');
    game.load.image('oil-spill', 'assets/oil-spill.png');
    
    game.load.image('superjek_logo', 'assets/superjek_logo.png');
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

}

function loadStart() {

}
