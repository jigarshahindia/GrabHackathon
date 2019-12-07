var userName = 'grab';

$(function () {
    userName = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];
});

function removeClass() {
    $("#all").removeClass("active");
    $("#transfort").removeClass("active");
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
        case 'all':
            $("#all").addClass("active");
            break;
        case 'transfort':
            $("#transfort").addClass("active");
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
            brek;
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
    var dataString = { category: cat };
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
