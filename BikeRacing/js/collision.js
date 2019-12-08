function handleCollision() {


    game.physics.arcade.collide(enemies);
    for(i=0; i< enemies.length; i++) {
        game.physics.arcade.collide(enemies[i], player, function (context) {
            carCrash.play();
            player.angle -= 10;
        });
    }

    updateTimer();

    game.physics.arcade.collide(player, rock, function (context) {
        levelTime -= 2;
        player.angle -= 10;
        carCrash.play();
        // stateNumber = -1;
    });

    game.physics.arcade.collide(player, pothole, function (context) {
        levelTime -= 2;
        player.angle -= 10;
        carCrash.play();
        // stateNumber = -1;
    });

    game.physics.arcade.collide(player, oilSpill, function (context) {
        levelTime -= 2;
        player.angle -= 10;
        carCrash.play();
        // stateNumber = -1;
    });

    game.physics.arcade.collide(player, pickup, function (context) {
        destination.visible = true;
        stateNumber = 1;
        pickup.destroy();
        collect.play();
        player.scale.setTo(1.2, 1.2);
        player.loadTexture('player-when-dropping1');
        delayPlayerMovementForPickup();
    });

    game.physics.arcade.collide(player, destination, function (context) {

        if(stateNumber >= 1) {
            stateNumber = 2;
            destination.destroy();
            player.scale.setTo(1.2, 1.2);
            player.loadTexture('player-when-dropping1');
            delayPlayerMovementForArrival();
            try {
                rock.destroy();
                pothole.destroy();
                oilSpill.destroy();
            }
            catch (e) {
                console.error(e);
            }

            collect.play();

        }else {
            player.angle -= 10;
            carCrash.play();
        }


    });
}

function delayPlayerMovementForPickup() {
    gameSpeed = 0;
    var cloud = game.add.sprite(player.x + 50, player.y - 100, 'pickup-cloud')
    cloud.scale.setTo(0.3, 0.3);
    setTimeout(function() {
        cloud.destroy();
        player.loadTexture('player-when-on-the-way1');
        gameSpeed = calculateGameSpeed();
    }, 1000);
}

function delayPlayerMovementForArrival() {
    gameSpeed = 0;
    var cloud = game.add.sprite(player.x + 50, player.y - 100, 'arrived-cloud')
    cloud.scale.setTo(0.3, 0.3);

    setTimeout(function() {
        player.loadTexture('player');
        player.scale.setTo(0.8, 0.8);
        cloud.destroy();
        gameSpeed = calculateGameSpeed();
    }, 1000);
}
