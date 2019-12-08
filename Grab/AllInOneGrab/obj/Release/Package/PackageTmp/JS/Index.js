var userName = '1';

$(function () {
    userName = window.location.href.slice(window.location.href.indexOf('?') + 1);
    if (userName != undefined) {
        userName = userName.split('=')[1];
        userName.replace("#", "");
    }
    BindDefaultCategory('transport');
});

function BindDefaultCategory(category) {
    fetchCategoryData(category);
}

function removeClass() {
    $("#transport").removeClass("active");
    $("#food").removeClass("active");
    $("#pay").removeClass("active");
    $("#delivery").removeClass("active");
    $("#tickets").removeClass("active");
    $("#hotels").removeClass("active");
    $("#videos").removeClass("active");
}

function categoryChange(category) {
    removeClass();
    switch (category) {
        case 'transport':
            $("#transport").addClass("active");
            break;
        case 'food':
            $("#food").addClass("active");
            break;
        case 'pay':
            $("#pay").addClass("active");
            break;
        case 'delivery':
            $("#delivery").addClass("active");
            break;
        case 'tickets':
            $("#tickets").addClass("active");
            break;
        case 'hotels':
            $("#hotels").addClass("active");
            break;
        case 'videos':
            $("#videos").addClass("active");
            break;

        default:
            $("#all").addClass("active");
            break;
    }
    fetchCategoryData(category);
}

function fetchCategoryData(cat) {
    var dataString = { category: cat, userName: userName };
    $.ajax({
        url: "Index.aspx/BindCategory",
        method: "POST",
        data: JSON.stringify(dataString),
        dataType: 'json',
        contentType: "application/json",
        success: function (result, status, jqXHR) {
            if (result != null)
                $("#divCards").html(result.d);
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}


function ReedemPoints(category, type, rewardValue) {
    var dataString = { category: category, type: type, userName: userName, rewardValue: rewardValue};
    $.ajax({
        url: "Index.aspx/ReedemPoint",
        method: "POST",
        data: JSON.stringify(dataString),
        dataType: 'json',
        contentType: "application/json",
        success: function (result, status, jqXHR) {
            if (result != null) {
                alert("Successfully redeemed the points");
                fetchCategoryData(category);
            }
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}