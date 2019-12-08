function shouldTransition() {
    if (currentLevel < 0) {
        return true;
    }
    if (stateNumber === 2) {
        stateNumber = -1;
        return true;
    }
}

function showLevelTransitionPrompt() {

}

var rock, pickup, destination, petrol, pothole, oilSpill;

var levelStartedTime;

var stateNumber = -1;

var levelTime;

var gameSpeed = 0;


var initialized = false;
var timer = 3;

var startTimer = false;

var musicStopped = false;

var timeLeft;

var speedGolderRatio = 90000;

var incrementalSpeed = 100;
var fixedSpeed = 1500;

function updateTimer() {
    if (startTimer) {
        timeLeft = levelTime - (Math.floor(Date.now() / 1000) - levelStartedTime);
        timerText.text = ' ' + timeLeft;
        scoreText.text = ' ' + currentLevel;
        checkLowFuelMusic(timeLeft);
    }
}


function checkLowFuelMusic(fuel) {
    if(currentLevel < 0) {
        currentLevel = 0;
    }

    if (fuel <= 0) {
        if (gameSpeed != 0) {
            var payload = {
                "token": "string-to-be-add",
                "type": "score",
                "score": currentLevel,
                "name": "Tarun",
                "image": "https://res.cloudinary.com/teepublic/image/private/s--1mnswHHJ--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_fffffe,e_outline:35/co_fffffe,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1516229303/production/designs/2287357_0.jpg",
                "channelId": "string-to-be-add",
                "senderProfileId": "string-to-be-add",
                "extensionId": "string-to-be-add",
                "extensionVersion": 1,
                "extensionMessageId": "NA",
                "channelMembersId": "NA"
            }
            sendScoreCallback(payload);
        }
        gameSpeed = 0;
        fuel = 0
    }
}

function updateArrow() {
    var position = getFinalPosition();

    if (Math.abs(position[0] - player.x) >= 800 || Math.abs(position[1] - player.y) >= 800) {
        arrow1.loadTexture('arrow2');
    } else {
        arrow1.loadTexture('arrow1');
    }

    arrow1.angle = getAngle(position[0], position[1], player);
    setArrowPosition(arrow1.angle);
}

function getFinalPosition() {
    var x, y;

    if (stateNumber == -1 || stateNumber == 2) {
        x = levels[currentLevel].metaData.objects[1].position.x;
        y = levels[currentLevel].metaData.objects[1].position.y;
        return [x, y];
    } else {
        x = levels[currentLevel].metaData.objects[2].position.x;
        y = levels[currentLevel].metaData.objects[2].position.y;
        return [x, y];
    }
 }

function setArrowPosition(angle) {
    delX = Math.cos(angle * Math.PI / 180) * 180;
    delY = Math.sin(angle * Math.PI / 180) * 180;

    arrow1.x = player.x + delX;
    arrow1.y = player.y + delY;
}

var getAngle = function (x, y, obj2) {
    var angleDeg = (Math.atan2(y - obj2.y, x - obj2.x) * 180 / Math.PI);
    return angleDeg;
};

function changeEnemiesDirection() {
    for (i = 0; i < enemies.length; i++) {
        if (game.rnd.integerInRange(1, 100) <= 5) {
            enemies[i].angle += game.rnd.integerInRange(-30, 30)
        }
        game.physics.arcade.velocityFromAngle(enemies[i].angle - 90, 200, enemies[i].body.velocity);
    }
}
function calculateGameSpeed() {
    // let fixed  = speedGolderRatio / (game.time.fps + 1);
    //
    // let variableWithLevel = (currentLevel * 6000)/(game.time.fps + 1);
    // return fixed + variableWithLevel;
    return fixedSpeed + currentLevel * incrementalSpeed
}
// function updateGame() {}

function runInitialTimer() {
    var timeLeftLocal;
    timeLeftLocal = timer - (Math.floor(Date.now() / 1000) - gameStartTime);
    if (timeLeftLocal === 0) {
        initialTimerText.text = 'Go';
    } else if (timeLeftLocal <= -1) {
        startTimer = true;
        gameSpeed = calculateGameSpeed();
        initialized = true;
        initialTimerText.destroy();
    } else {
        initialTimerText.text = timeLeftLocal;
    }
}

function update() {

    if (!gameLoaded) {
        return
    } else {
    }

    if (!onboarded) {
        onboarding();
        return
    }

    if (!initialized) {
        runInitialTimer();
    }
    if (shouldTransition()) {
        showLevelTransitionPrompt();
        currentLevel++;
        renderLevel();
    } 
    else {
    }
    
    changeEnemiesDirection();
    handleCollision();


    var RIGHT = 1, LEFT = 0;
    var playerAcceleration;


    if (game.input.pointer1.isDown) {
        if (Math.floor(game.input.x / (game.width / 2)) === LEFT) {
            player.angle -= 3;
        }
        if (Math.floor(game.input.x / (game.width / 2)) === RIGHT) {
            player.angle += 3;
        }
    }

    game.world.bounds.centerOn(player.x, player.y);
    game.camera.setBoundsToWorld();

    if (cursors.left.isDown) {
        player.angle -= 3;
    } else if (cursors.right.isDown) {
        player.angle += 3;
    }
    if(gameSpeed != 0) {
        gameSpeed =  calculateGameSpeed();

    } 
    game.physics.arcade.velocityFromAngle(player.angle - 90, gameSpeed, player.body.velocity);

    road.tilePosition.x = -game.camera.x;
    road.tilePosition.y = -game.camera.y;

    updateArrow();
    if (timeLeft <= 0) {
        game.state.start('endGame');
    }
}
