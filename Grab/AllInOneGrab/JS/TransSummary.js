$(function () {
    userName = window.location.href.slice(window.location.href.indexOf('?') + 1);
    if (userName != 'admin') {
        window.location.href = "../UnauhtorizedAccess.aspx";
    }
    if (userName != undefined) {
        userName = userName.split('=')[1];
        userName.replace("#", "");
    }
    BindSummary();
});

function BindSummary() {
    $.ajax({
        url: "TransactionSummary.aspx/GetTransactionSummary",
        method: "POST",
        dataType: 'json',
        contentType: "application/json",
        success: function (result, status, jqXHR) {
            if (result != null) {
                $("#tblSummary").html(result.d);
            }
            else {
                alert("please try again after sometime");
            }
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}