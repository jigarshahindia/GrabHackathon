function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandom(level) {
    return getRandomInt(0, 5000);

}

function randomObject(type, level) {
    return {
        type: type,
        id: 1,
        position: {
            x: -1,
            y: -1
        }
    }
}

function getRandomlyLocatedObjects(level) {
    return [
        randomObject('rock', level),
        randomObject('pickup', level),
        randomObject('destination', level),
        randomObject('pothole', level),
        randomObject('oil-spill', level),
    ]
}

const MAX_LEVEL = 250;

var levels = [];
for(var i=0; i<MAX_LEVEL; i++) {
    levels.push({
        name: 'Level '+ i,
        description: 'Start',
        ttInSeconds: 50,
        mapId: 'map1',
        metaData: {
            objects: getRandomlyLocatedObjects(i)
        }
    })
}


function resetEnemies() {
    if(enemies.length < 15) {
        enemies.push(initEnemy());
    }
    if(currentLevel % 5 !== 0) {
        return
    }
    for(var i = 0; i < enemies.length; i++){

        if(currentLevel <= 10) {
            enemies[i].x = getRandomInt(0, 10000 / (currentLevel + 1));
            enemies[i].y = getRandomInt(0, 10000 / (currentLevel + 1));
        } else if(currentLevel <= 50){
            enemies[i].x = getRandomInt(0, 100000 / (currentLevel + 1));
            enemies[i].y = getRandomInt(0, 100000 / (currentLevel + 1));
        }else {
            enemies[i].x = getRandomInt(0, 500000 / (currentLevel + 1));
            enemies[i].y = getRandomInt(0, 500000 / (currentLevel + 1));
        }

    }
    // createEnemies();
}

function renderLevel() {

    let xLocal, yLocal;
    levelTime = levels[currentLevel].ttInSeconds;
    resetEnemies();

    levels[currentLevel].metaData.objects.forEach(function (object) {

        levelStartedTime = Math.floor(Date.now()/1000);
        xLocal = getRandom(currentLevel)
        yLocal = getRandom(currentLevel)
        if(object.type === 'pickup') {

            pickup = game.add.sprite(xLocal, yLocal, 'pickup');
            game.physics.arcade.enable(pickup);
            pickup.enableBody = true;
            pickup.scale.setTo(0.4, 0.4);
            pickup.body.immovable = true;
            game.physics.enable([ player, pickup ], Phaser.Physics.ARCADE);
            levels[currentLevel].metaData.objects[1].position.x = xLocal
            levels[currentLevel].metaData.objects[1].position.y = yLocal            

        }

        if(object.type === 'destination') {

            destination = game.add.sprite(xLocal, yLocal, 'destination');
            game.physics.arcade.enable(destination);
            destination.enableBody = true;
            destination.body.immovable = true;
            destination.scale.setTo(0.4, 0.4);
            game.physics.enable([ player, destination ], Phaser.Physics.ARCADE);
            destination.visible = false;
            levels[currentLevel].metaData.objects[2].position.x = xLocal
            levels[currentLevel].metaData.objects[2].position.y = yLocal  
        }

        if(object.type === 'rock') {
            rock = game.add.sprite(xLocal, yLocal, 'rock');
            game.physics.arcade.enable(rock);
            rock.enableBody = true;
            rock.body.immovable = true;
            rock.scale.setTo(0.1, 0.1);
            game.physics.enable([ player, rock ], Phaser.Physics.ARCADE);
        }

        if(object.type === 'pothole') {
            pothole = game.add.sprite(xLocal, yLocal, 'pothole');
            game.physics.arcade.enable(pothole);
            pothole.enableBody = true;
            pothole.body.immovable = true;
            pothole.scale.setTo(0.4, 0.4);
            game.physics.enable([ player, pothole ], Phaser.Physics.ARCADE);
        }

        if(object.type === 'oil-spill') {
            oilSpill = game.add.sprite(xLocal, yLocal, 'oil-spill');
            game.physics.arcade.enable(oilSpill);
            oilSpill.enableBody = true;
            oilSpill.body.immovable = true;
            oilSpill.scale.setTo(0.4, 0.4);
            game.physics.enable([ player, oilSpill ], Phaser.Physics.ARCADE);
        }

    })
}
