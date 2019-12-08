<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="AllInOneGrab.Index" %>

<!DOCTYPE HTML>
<html>
<head>
    <title>Grab All In One</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/faveicon.png" type="image/png" sizes="16x16">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="JS/Index.js"></script>

    <style>
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            border: 1px solid #e7e7e7;
            background-color: #f3f3f3;
        }

        li {
            float: left;
        }

            li a {
                display: block;
                color: #666;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }

                li a:hover:not(.active) {
                    background-color: #ddd;
                }

                li a.active {
                    color: white;
                    background-color: #4CAF50;
                }
    </style>
</head>

<body>
    <!--START HEADER-->
    <header class="site-header">
        <div class="container">
            <div class="head-nav pull-right">

                <span>

                    <div class="dropdown">
                        <a href="#" class="icon-tab  notification-nav" type="button" data-toggle="dropdown" aria-expanded="false"><span class="no-items">2</span></a>
                        <ul class="dropdown-menu">
                            <li>Buy more food using grab app and get more rewards points</li>
                            <li>Currently we are serving cab service also in your area.</li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <a type="button" data-toggle="dropdown" class="icon-tab user-nav" href="#"></a>
                        <ul class="dropdown-menu user-dropdown">
                            <li><span class="user-img-cart">
                                <img src="https://www.grab.com/sg/wp-content/themes/grabsg/img/grab_logo_158.png" alt=""></span> Grab</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i><a href="#">Rewards</a></li>
                            <%--<li><i class="fa fa-cog" aria-hidden="true"></i><a href="#">Account</a></li>--%>
                            <li><i class="fa fa-user" aria-hidden="true"></i><a href="Login.aspx">Sign Out</a></li>
                        </ul>
                    </div>
                </span>
            </div>
        </div>

        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="container">
                    <div class="search-box">
                        <a href="#" class="btn-search"></a>
                        <input type="text" name="q" placeholder="Search FIFA U-17 World Cup India 2017 Tickets" class="search-top" />
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <dl>
                            <dt>Quick Links</dt>
                            <dd><a href="#">Tickets By Team</a></dd>
                            <dd><a href="#">All Matches Tickets</a></dd>
                            <dd><a href="#">Ticketing Process</a></dd>
                            <dd><a href="#">FAQs</a></dd>
                            <dd><a href="#">Terms & Conditions</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

    </header>
    <!--END HEADER-->

    <div id="divLoading">
    </div>

    <!--START VENUE-->
    <section class="venue-section">
        <div class="container">
            <h2 class="site-title">GRAB BAZAAR</h2>
            <!-- Menu Bar -->
            <div class="row">
                <ul id="ulCategory">
                    <li><a href="#" onclick="categoryChange('transport')" id="transport" class="active">transport</a></li>
                    <li><a href="#" onclick="categoryChange('food')" id="food">Food</a></li>
                    <li><a href="#" onclick="categoryChange('pay')" id="pay">Pay</a></li>
                    <li><a href="#" onclick="categoryChange('delivery')" id="delivery">Delivery</a></li>
                    <li><a href="#" onclick="categoryChange('tickets')" id="tickets">Tickets</a></li>
                    <li><a href="#" onclick="categoryChange('hotels')" id="hotels">Hotels</a></li>
                    <li><a href="#" onclick="categoryChange('videos')" id="videos">Videos</a></li>
                </ul>
            </div>
            <br />

            <!-- End Menu Bar -->
            <div id="divCards"></div>

        </div>
    </section>
    <!--END VENUE-->

    <!--START PHASES-->
    <section class="phases-section">
        <div class="container">
            <h2 class="site-title">How to earn rewards</h2>
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <span class="phases-icon phases-icon1"></span>
                    <h3>Phase 1</h3>
                    <div class="phases-detail">
                        Engage on Grab platform
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <span class="phases-icon phases-icon1"></span>
                    <h3>Phase 2</h3>
                    <div class="phases-detail">
                        Grab will add rewards for every interactions
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <span class="phases-icon phases-icon1"></span>
                    <h3>Phase 3</h3>
                    <div class="phases-detail">
                        Use this website to redeem
                    </div>
                </div>
            </div>

        </div>

    </section>
    <!--END PHASES-->

    <footer style="display: block;">
        <div class="gray-sep-1 m-t-30-res"></div>

        <div class="site-footer">

            <div class="container text-center">
                <p>
                    Copyright ©2009-2019 Grab. All rights reserved.
                </p>
            </div>
        </div>

    </footer>
</body>
</html>
