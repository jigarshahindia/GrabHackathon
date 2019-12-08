function onboarding() {
    if (onboardedScreensChecked === 0) {
        movementOnboard();
    } else if (onboardedScreensChecked === 1) {
        arrowOnboard();
    } else if (onboardedScreensChecked === 2) {
        obstacleOnboard();
    } else if (onboardedScreensChecked === 3) {
        fuelOnboard();
    } else {
        arrow1.visible = true;
        rightArrow.destroy();
        leftArrow.destroy();
        fuelDummy.destroy();
        onboarded = true;
        onboardingText.destroy();
        initialTimer();
        gameStartTime = Math.floor(Date.now() / 1000);
        enemies.push(initEnemy());
    }
}

function movementOnboard() {
    onboardingText.text = 'TAP LEFT AND RIGHT\n       TO NAVIGATE';
}

function arrowOnboard() {
    rightArrow.destroy();
    leftArrow.destroy();
    arrow1.visible = true;
    onboardingText.text = '    THE ARROW TELLS\n YOU ABOUT DIRECTION\n      AND HOW CLOSE\n   YOU ARE TO PICKUP';
}

function obstacleOnboard() {
    arrow1.visible = false;
    potholeDummy.visible = true;
    oilSpillDummy.visible = true;
    onboardingText.text = 'BE CAREFUL OF\nOIL SPILLS AND\n    POTHOLES ';
}

function fuelOnboard() {
    potholeDummy.destroy();
    oilSpillDummy.destroy();
    fuelDummy.visible = true;
    onboardingText.text = 'GAME ENDS WHEN\n THE FUEL IS ZERO'
}