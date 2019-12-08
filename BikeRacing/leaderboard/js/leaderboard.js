function httpGetAsync(theUrl, token, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader("game_token", token);
    xmlHttp.send(null);
}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function positionToLeaderElementMapping(position, name, score, is_current_user) {

    if(position === 1) {
        return '<tr class="score-row">' +
        '<td scope="row" class="batch-container"><img  class="batch" src="/assets/leaderboard/imgGoldMedal.png" ></td>' +
        '<td> ' +
            '<div class="name">' + name + '</div>' +
            '<div class="score-points"> ' + score + ' points</div>' +
        '</td></tr>'
    }
    if(position === 2) {
        return '<tr class="score-row">' +
            '<td scope="row" class="batch-container"><img  class="batch" src="/assets/leaderboard/imgSilverMedal.png" ></td>' +
            '<td> ' +
            '<div class="name">' + name + '</div>' +
            '<div class="score-points"> ' + score + ' points</div>' +
            '</td></tr>'
    }
    if(position === 3) {
        return '<tr class="score-row">' +
            '<td scope="row" class="batch-container"><img  class="batch" src="/assets/leaderboard/imgBronzeMedal.png" ></td>' +
            '<td> ' +
            '<div class="name">' + name + '</div>' +
            '<div class="score-points"> ' + score + ' points</div>' +
            '</td></tr>'
    }

        return '<tr class=" score-row">' +
        '<td scope=" row" class="batch-container batch-container-numbered">' +
        '<img  style="width: 100%" src="/assets/leaderboard/imgLeaderboardDefaultBorder.png" >' +
        '<div class="batch-position"> ' + position +' </div>'+
        '</td>' +
        '<td>'+
        '<div class="name">' + name +'</div>'+
    '<div class="score-points"> ' + score + ' points</div>'+
    '</td>'+
    '</tr>'


}

function showLeaderboard(data) {
    var leaderBoardData = JSON.parse(data);
    console.log(leaderBoardData);
    var position = 1;
    var leaderBoardHTML = '';

    for(i=0; i < leaderBoardData.length; i++) {
        var score = leaderBoardData[i].score;
        var name = leaderBoardData[i].gamer_name;
        var is_current_user = leaderBoardData[i].is_current_user;
        leaderBoardHTML += positionToLeaderElementMapping(position, name, score, is_current_user);
        position++;

    }

    document.body.style.backgroundColor = "white";
    document.getElementById("loader").style.display = "none";
    document.getElementById("leaderboard").style.display = "inline-table";
    document.getElementById('leader-board').innerHTML = leaderBoardHTML;
}