<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="AllInOneGrab.Login" %>

<!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/w3.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="JS/Login.js"></script>

<style>
    .login-back {
        width: 30%;
        margin: auto;
        padding: 10px 30px;
    }

    .hgt20 {
        height: 20px;
    }

    .hgt20-1 {
        height: 20px;
    }

    .btn-100 {
        width: 100%;
        margin-top: 10px;
    }

    .pdd-6 {
        padding: 6px;
    }

    a {
        text-decoration: none;
    }

    .w3-small a:hover {
        text-decoration: underline;
        color: #333333;
    }

    .warning {
        width: 50%;
        margin: auto;
    }



    @media screen and (max-width: 767px) {

        .login-back {
            width: 70%;
        }
    }


    @media screen and (max-width: 480px) {

        img {
            width: 60%;
        }

        .login-back {
            width: 96%;
            padding: 0 3px 3px;
        }

        .hgt20 {
            height: 5px;
        }

        .hgt20-1 {
            height: 10px;
        }

        .pdd-6 {
            padding: 4px;
        }

        .warning {
            width: 96%;
        }

        .btn-100 {
            width: 100%;
            margin-top: 3px;
        }
    }
</style>

<body>

    <div class="hgt20"></div>

    <header class="w3-container w3-center">
        <img src="https://www.grab.com/sg/wp-content/themes/grabsg/img/grab_logo_158.png" alt="logo">
    </header>

    <div class="hgt20-1"></div>

    <p id="wrongpwdMsg" style="display: none;" class="w3-pale-yellow w3-small w3-center w3-text-grey w3-padding-4 warning">You have entered wrong password</p>

    <div class="hgt20"></div>

    <div class="w3-container w3-light-grey w3-topbar w3-border-blue w3-card-2 login-back">


        <form class="w3-container">

            <h2 class="w3-text-grey">Login</h2>

            <p>
                <label class="w3-small w3-text-grey">First Name</label>
                <input class="w3-input w3-border w3-small w3-text-grey pdd-6" type="text" id="userName">
            </p>

            <p>
                <label class="w3-small w3-text-grey">Password</label>
                <input class="w3-input w3-border w3-small w3-text-grey pdd-6" type="password" id="password">
            </p>

            <p>
                <input type="button" class="w3-btn w3-blue w3-large btn-100" value="Login" onclick="ValidateCredentials()">
            </p>

            <p class="w3-center w3-small w3-text-grey w3-padding-8">
                <a href="">Forgot Password</a>
            </p>

        </form>


    </div>


</body>
</html>

