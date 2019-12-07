function ValidateCredentials() {
    $("#wrongpwdMsg").hide();
    var userName = $("#userName").val();
    var password = $("#password").val();

    if (userName == '' || password == '') {
        $("#wrongpwdMsg").val("please enter username and password");
        $("#wrongpwdMsg").show();
    }

    if (userName != 'grab' || password != 'grab123') {
        $("#wrongpwdMsg").val("You have entered invalid username and password");
        $("#wrongpwdMsg").show();
    }

    if (userName == 'grab' && password == 'grab123') {
        window.location.href = "Index.aspx";
    }
}