function ValidateCredentials() {
    $("#wrongpwdMsg").hide();
    var userName = $("#userName").val();
    var password = $("#password").val();

    if (userName == '' || password == '') {
        $("#wrongpwdMsg").val("please enter username and password");
        $("#wrongpwdMsg").show();
    }

    if (password != 'grab123') {
        $("#wrongpwdMsg").val("You have entered invalid username and password");
        $("#wrongpwdMsg").show();
    }
    else {
        window.location.href = "Index.aspx?user=" + userName;
    }
}