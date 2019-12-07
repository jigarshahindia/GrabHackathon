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
                            <li><i class="fa fa-gift" aria-hidden="true"></i><a href="#">Orders</a></li>
                            <li><i class="fa fa-cog" aria-hidden="true"></i><a href="#">Account</a></li>
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



    <!--START VENUE-->
    <section class="venue-section">
        <div class="container">
            <h2 class="site-title">Grab Bazaar</h2>
            <!-- Menu Bar -->
            <div class="row">
                <ul>
                    <li><a class="active" href="#" onclick="categoryChange('All')">All Vouchers</a></li>
                    <li><a href="#news">Food</a></li>
                    <li><a href="#contact">Travel</a></li>
                    <li><a href="#about">Entertenment</a></li>
                </ul>
            </div>
            <br />
            <!-- End Menu Bar -->
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="venue-cell">
                        <a href="#">
                            <div class="venue-opp">
                                Paytm Movie voucher
                    <small>$100</small>
                            </div>
                            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2017-07/30/full/1501424786-7088.jpg" width="425" height="162" class="img-responsive">
                        </a>
                        <a href="#" class="btn btn-primary btn-block">REEDEM</a>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="venue-cell">
                        <a href="#">
                            <div class="venue-opp">
                                Paytm Movie voucher
                    <small>$100</small>
                            </div>
                            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2017-07/30/full/1501424786-7088.jpg" width="425" height="162" class="img-responsive">
                        </a>
                        <a href="#" class="btn btn-primary btn-block">REEDEM</a>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="venue-cell">
                        <a href="#">
                            <div class="venue-opp">
                                Paytm Movie voucher
                    <small>$100</small>
                            </div>
                            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2017-07/30/full/1501424786-7088.jpg" width="425" height="162" class="img-responsive">
                        </a>
                        <a href="#" class="btn btn-primary btn-block">REEDEM</a>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="venue-cell">
                        <a href="#">
                            <div class="venue-opp">
                                Kolkata
                        <small>Vivekanand Yuba Bharati Krirangan Stadium</small>
                            </div>
                            <img src="images/venue-kolkata.jpg" width="425" height="162" class="img-responsive">
                        </a>
                        <a href="#" class="btn btn-primary btn-block">BOOK TICKETS</a>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="venue-cell">
                        <a href="#">
                            <div class="venue-opp">
                                Navi Mumbai
                    <small>Dr. D.Y. Patil Stadium</small>
                            </div>
                            <img src="images/venue-mumbai.jpg" width="425" height="162" class="img-responsive">
                        </a>
                        <a href="#" class="btn btn-primary btn-block">BOOK TICKETS</a>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="venue-cell">
                        <a href="#">
                            <div class="venue-opp">
                                New Delhi
                    <small>Jawaharlal Nehru Stadium</small>
                            </div>
                            <img src="images/venue-delhi.jpg" width="425" height="162" class="img-responsive">
                        </a>
                        <a href="#" class="btn btn-primary btn-block">BOOK TICKETS</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--END VENUE-->
    <!--START MATCHES-->
    <section class="matches-team-sec text-center">
        <div class="container">
            <h2 class="site-title">TICKETS BY TEAM</h2>
            <div class="row">
                <div class="col-sm-2">
                    <p class="team-title">Group A</p>
                    <p>
                        <a href="#">
                            <img src="images/flag-1.png" alt="Flag"><br>
                            Ghana</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-2.png" alt="Flag"><br>
                            Guinea</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-3.png" alt="Flag"><br>
                            Mali</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-4.png" alt="Flag"><br>
                            Japan</a>
                    </p>
                </div>

                <div class="col-sm-2">
                    <p class="team-title">Group B</p>
                    <p>
                        <a href="#">
                            <img src="images/flag-5.png" alt="Flag"><br>
                            India</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-6.png" alt="Flag"><br>
                            Iran</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-7.png" alt="Flag"><br>
                            Iraq</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-8.png" alt="Flag"><br>
                            Spain</a>
                    </p>
                </div>

                <div class="col-sm-2">
                    <p class="team-title">Group C</p>
                    <p>
                        <a href="#">
                            <img src="images/flag-9.png" alt="Flag"><br>
                            England</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-10.png" alt="Flag"><br>
                            France</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-11.png" alt="Flag"><br>
                            Germany</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-12.png" alt="Flag"><br>
                            USA</a>
                    </p>
                </div>

                <div class="col-sm-2">
                    <p class="team-title">Group D</p>
                    <p>
                        <a href="#">
                            <img src="images/flag-13.png" alt="Flag"><br>
                            Costa Rica</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-14.png" alt="Flag"><br>
                            Honduras</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-15.png" alt="Flag"><br>
                            Mexico</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-16.png" alt="Flag"><br>
                            Paraguay</a>
                    </p>
                </div>

                <div class="col-sm-2">
                    <p class="team-title">Group E</p>
                    <p>
                        <a href="#">
                            <img src="images/flag-17.png" alt="Flag"><br>
                            New Caledonia</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-18.png" alt="Flag"><br>
                            New Zealand</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-19.png" alt="Flag"><br>
                            Colombia</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-20.png" alt="Flag"><br>
                            Korea DPR</a>
                    </p>
                </div>

                <div class="col-sm-2">
                    <p class="team-title">Group F</p>
                    <p>
                        <a href="#">
                            <img src="images/flag-21.png" alt="Flag"><br>
                            Brazil</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-22.png" alt="Flag"><br>
                            Chile</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-23.png" alt="Flag"><br>
                            Niger</a>
                    </p>
                    <p>
                        <a href="#">
                            <img src="images/flag-24.png" alt="Flag"><br>
                            Turkey</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!--END MATCHES-->




    <section class="matches-sch-sec text-center">
        <div class="container">
            <a href="/Document/FIFA_U_17_World_Cup_Schedule.pdf" target="_blank" class="footer-link">Match Schedule </a>
            <img src="images/small-logo.png" class="img-responsive"><a href="/Document/FIFA_U_17_World_Cup_Terms.pdf" target="_blank" class="footer-link">Terms &amp; Conditions</a>
        </div>
    </section>

    <!--START PHASES-->
    <section class="phases-section">
        <div class="container">
            <h2 class="site-title">Ticket Sales Phases</h2>
            <div class="row">
                <div class="col-md-3 col-sm-3">
                    <span class="phases-icon phases-icon1"></span>
                    <h3>Phase 1</h3>
                    <div class="phases-date">13/05/2017 to 07/07/2017</div>
                    <div class="phases-detail">
                        Venue Package Sales:<br>
                        60% Discount
                    </div>
                </div>
                <div class="col-md-3 col-sm-3">
                    <span class="phases-icon phases-icon2"></span>
                    <h3>Phase 2</h3>
                    <div class="phases-date">07/07/2017 to 22/07/2017</div>
                    <div class="phases-detail">
                        Individual Match Ticket Sales:<br>
                        Visa Cardholders Only.<br>
                        50% Discount
                    </div>
                </div>
                <div class="col-md-3 col-sm-3">
                    <span class="phases-icon phases-icon3"></span>
                    <h3>Phase 3</h3>
                    <div class="phases-date">21/07/2017 to 05/10/2017</div>
                    <div class="phases-detail">
                        Individual Match Ticket Sales:<br>
                        25% Discount
                    </div>
                </div>
                <div class="col-md-3 col-sm-3">
                    <span class="phases-icon phases-icon4"></span>
                    <h3>Phase 4</h3>
                    <div class="phases-date">06/10/2017 to 28/10/2017</div>
                    <div class="phases-detail">
                        Individual Match Ticket Sales:<br>
                        Full Price
                    </div>
                </div>
            </div>

        </div>

    </section>
    <!--END PHASES-->

    <footer style="display: block;">
        <div class="gray-sep-1 m-t-30-res"></div>
        <div class="container-sm clearfix partners-logo">
            <div class="bot-logos m-t-b-30-res text-center">
                <div class="partners-top-logo">
                    <h3>FIFA U-17 World Cup India 2017</h3>
                    <h4>FIFA Partners</h4>
                    <a href="#">
                        <img src="images/partners-1.png" class="img-responsive"></a>
                    <a href="#">
                        <img src="images/partners-2.png" class="img-responsive"></a>
                    <a href="#">
                        <img src="images/partners-3.png" class="img-responsive"></a>
                    <a href="#">
                        <img src="images/partners-4.png" class="img-responsive"></a>
                    <a href="#">
                        <img src="images/partners-5.png" class="img-responsive"></a>
                    <a href="#">
                        <img src="images/partners-6.png" class="img-responsive"></a>
                </div>

                <h4 class="clearfix">National Supporters</h4>
                <div class="partners-bottom-logo">
                    <a href="#">
                        <img src="images/partners-7.png" class="img-responsive"></a>
                    <a href="#">
                        <img src="images/partners-8.png" class="img-responsive"></a>
                    <a href="#">
                        <img src="images/partners-9.png" class="img-responsive"></a>
                    <a href="#">
                        <img src="images/partners-10.jpg" class="img-responsive"></a>
                </div>
            </div>
        </div>

        <div class="site-footer">
            <div class="foot-social text-center">
                <div class="container">
                    <a href="#" class="footer-link">Terms & Conditions</a>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#" class="footer-link">Match Schedule</a>
                </div>
            </div>
            <div class="container text-center">
                <p>
                    Kyazoonga is the assigned ticket seller of FIFA U-17 World Cup India 2017 and is solely responsible for all transactional aspects of your purchase.<br>
                    Copyright ©1994-2017 FIFA. All rights reserved.
                </p>
            </div>
        </div>

    </footer>
</body>
</html>
